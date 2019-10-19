import React from 'react';
import { YTSEARCH, ONEVIDEO } from './apiEndpoints'
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import BackButton from './components/backButton'
import SearchBar from './components/searchBar'
import VideoList from './containers/videoList'
import VideoContainer from './containers/videoContainer'

class App extends React.Component {

	state = {
		searchTerm: 'surf',
		searchResults: [],
		selectedVideo: null,
		videoDetails: {}
	}

	async componentDidMount() {
		const searchResults = await this.getVideos('surf')
		this.setState({ searchResults })
	}

	handleSearch = async (newSearch) => {
		const searchTerm = `${this.state.searchTerm} ${newSearch}`
		const searchResults = await this.getVideos(searchTerm)
		this.setState({ searchTerm, searchResults })
	}

	handleVideoSelect = async (videoId) => {
		const details = await fetch(`${ONEVIDEO}id=${videoId}`).then(res => res.json())
		this.setState({
			selectedVideo: videoId,
			videoDetails: details.items[0]
		})
	}

	handleVideoDeselect = () => {
		this.setState({
			selectedVideo: null,
			videoDetails: {}
		})
	}

getVideos = async (searchTerm) => {
	const data = await fetch(`${YTSEARCH}&q=${searchTerm}`).then(res => res.json())
	return data.items
}

handleReset = async () => {
	const searchTerm = 'surf'
	const searchResults = await this.getVideos(searchTerm)
	this.setState({ searchTerm, searchResults })
}

	renderMainContent = () => {
		if (this.state.selectedVideo) {
			return <VideoContainer details={this.state.videoDetails}/>
		} else {
			return <VideoList
							videos={this.state.searchResults}
							handleVideoSelect={this.handleVideoSelect}
						/>
		}
	}

	render() {
	  return (
			<Container>
				<Row className='justify-content-center my-3'>
					{this.state.selectedVideo ? <BackButton deselectVideo={this.handleVideoDeselect}/> : null}
					<SearchBar newSearch={this.handleSearch}/>
				</Row>
				<Row>
					{this.renderMainContent()}
				</Row>
			</Container>
	  );
	}
}

export default App;

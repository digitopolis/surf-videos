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
		const data = await fetch(`${YTSEARCH}&q=${this.state.searchTerm}`).then(res => res.json())
		this.setState({
			searchResults: data.items
		})
	}

	handleSearch = async (searchTerm) => {
		const newSearch = `${this.state.searchTerm} ${searchTerm}`
		const data = await fetch(`${YTSEARCH}&q=${newSearch}`).then(res => res.json())
		this.setState({
			searchTerm: newSearch,
			searchResults: data.items
		})
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
					<SearchBar />
				</Row>
				<Row>
					{this.renderMainContent()}
				</Row>
			</Container>
	  );
	}
}

export default App;

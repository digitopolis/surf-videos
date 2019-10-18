import React from 'react';
import { SURFVIDEOS, ONEVIDEO } from './apiEndpoints'
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import SearchBar from './components/searchBar'
import VideoList from './containers/videoList'
import VideoContainer from './containers/videoContainer'

class App extends React.Component {

	state = {
		searchResults: [],
		selectedVideo: null,
		videoDetails: {}
	}

	async componentDidMount() {
		const data = await fetch(SURFVIDEOS).then(res => res.json())
		this.setState({
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

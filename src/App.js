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
		videos: [],
		nextPageToken: '',
		selectedVideo: null,
		videoDetails: {},
		moreUserVideos: []
	}

	async componentDidMount() {
		const searchResults = await this.getVideos('surf')
		this.setState({
			videos: searchResults.videos,
		 	nextPageToken: searchResults.pageToken
		})
	}

	handleSearch = async (newSearch) => {
		const searchTerm = `${this.state.searchTerm} ${newSearch}`
		const searchResults = await this.getVideos(searchTerm)
		this.setState({
			searchTerm: searchTerm,
			videos: searchResults.videos,
		 	nextPageToken: searchResults.pageToken
		})
	}

	handleVideoSelect = async (videoId, channelId) => {
		const details = await fetch(`${ONEVIDEO}id=${videoId}`).then(res => res.json())
		const moreVideos = await this.getUserVideos(channelId)
		this.setState({
			selectedVideo: videoId,
			videoDetails: details.items[0],
			moreUserVideos: moreVideos
		})
	}

	handleVideoDeselect = () => {
		this.setState({
			selectedVideo: null,
			videoDetails: {}
		})
	}

getVideos = async (searchTerm, pageToken = '', channelId = '') => {
	const results = {}
	let channelParam = ''
	// google api doesn't accept channelId of an empty string
	if (channelId !== '') {
		channelParam = `&channelId=${channelId}`
	}
	const data = await fetch(`${YTSEARCH}&q=${searchTerm}&pageToken=${pageToken}${channelParam}`).then(res => res.json())
	results.videos = data.items
	results.pageToken = data.nextPageToken
	return results
}

loadMoreVideos = async () => {
	const searchResults = await this.getVideos(this.state.searchTerm, this.state.nextPageToken)
	const newVideoList = [...this.state.videos, ...searchResults.videos]
	this.setState({
		videos: newVideoList,
		nextPageToken: searchResults.pageToken
	})
}

getUserVideos = async (channelId) => {
	const searchResults = await this.getVideos('', '', channelId)
	return searchResults.videos
}

handleReset = async () => {
	const searchTerm = 'surf'
	const searchResults = await this.getVideos(searchTerm)
	this.setState({
		searchTerm: searchTerm,
		videos: searchResults.videos,
	 	nextPageToken: searchResults.pageToken
	})
}

	renderMainContent = () => {
		if (this.state.selectedVideo) {
			return <VideoContainer {...this.state.videoDetails}
							videos={this.state.moreUserVideos}
							handleVideoSelect={this.handleVideoSelect}/>
		} else {
			return <VideoList
							videos={this.state.videos}
							handleVideoSelect={this.handleVideoSelect}
							loadMoreVideos={this.loadMoreVideos}
						/>
		}
	}

	render() {
	  return (
			<Container>
				<Row className='justify-content-center my-3'>
					{this.state.selectedVideo ? <BackButton deselectVideo={this.handleVideoDeselect}/> : null}
					<SearchBar
						newSearch={this.handleSearch}
						resetSearch={this.handleReset}
						resetStyle={this.state.searchTerm === 'surf' ? 'outline-secondary' : 'secondary'}/>
				</Row>
				<Row>
					{this.renderMainContent()}
				</Row>
			</Container>
	  );
	}
}

export default App;

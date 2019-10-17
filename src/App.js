import React from 'react';
import { SURFVIDEOS } from './apiEndpoints'
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import SearchBar from './components/searchBar'
import VideoList from './containers/videoList'

class App extends React.Component {

	state = {
		searchResults: []
	}

	async componentDidMount() {
		const data = await fetch(SURFVIDEOS).then(res => res.json())
		this.setState({
			searchResults: data.items
		})
	}

	render() {
	  return (
			<Container>
				<Row className='justify-content-center my-3'>
					<SearchBar />
				</Row>
				<Row>
					<VideoList videos={this.state.searchResults}/>
				</Row>
			</Container>
	  );
	}
}

export default App;

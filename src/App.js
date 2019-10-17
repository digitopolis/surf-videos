import React from 'react';
import { SURFVIDEOS } from './apiEndpoints'
import './App.css';
import Container from 'react-bootstrap/Container'

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
				<h1>videos here</h1>
			</Container>
	  );
	}
}

export default App;

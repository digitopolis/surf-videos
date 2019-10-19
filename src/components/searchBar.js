import React from 'react'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class SearchBar extends React.Component {

	state = {
		searchTerm: ''
	}

	handleChange = (event) => {
		const searchTerm = event.target.value
		this.setState({ searchTerm })
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.newSearch(this.state.searchTerm)
	}

	render() {
		return (
			<Col md={{ span: 7 }} className='py-1'>
				<Form onSubmit={this.handleSubmit}>
					<InputGroup>
						<FormControl
							placeholder='Search'
							value={this.state.searchTerm}
							onChange={this.handleChange}/>
						<InputGroup.Append>
							<Button variant='secondary' type='submit'>Search</Button>
							<Button
								variant='secondary'
								onClick={this.props.resetSearch}>Reset</Button>
						</InputGroup.Append>
					</InputGroup>
				</Form>
			</Col>
		)
	}
}

export default SearchBar

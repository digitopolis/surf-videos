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

	render() {
		return (
			<Col md={{ span: 7 }} className='py-1'>
				<Form >
					<InputGroup>
						<FormControl
							placeholder='Search'
							value={this.state.searchTerm}
							onChange={this.handleChange}/>
						<InputGroup.Append>
							<Button variant='secondary' type='submit'>Search</Button>
						</InputGroup.Append>
					</InputGroup>
				</Form>
			</Col>
		)
	}
}

export default SearchBar

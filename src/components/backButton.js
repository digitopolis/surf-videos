import React from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'

const BackButton = ({ deselectVideo }) => {
	return (
		<Col className='mr-4'>
			<Button
				variant='secondary'
				onClick={deselectVideo}
			>
				Back
			</Button>
		</Col>
	)
}

export default BackButton

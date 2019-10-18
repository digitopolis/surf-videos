import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const VideoDetails = ({ snippet }) => {
	const dateUploaded = new Date(snippet.publishedAt)
	return (
		<Container>
			<Row className='my-2 border-bottom'>
				<Col className='px-0'>
					<h5>{snippet.title}</h5>
					<p>{dateUploaded.toLocaleString()}</p>
				</Col>
			</Row>
			<Row>
				<p className='h6'>{snippet.channelTitle}</p>
				<p>{snippet.description}</p>
			</Row>
		</Container>
	)
}

export default VideoDetails

import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const VideoDetails = ({ publishedAt, title, channelTitle, description }) => {
	const dateUploaded = new Date(publishedAt)
	return (
		<Container>
			<Row className='my-2 border-bottom'>
				<Col className='px-0'>
					<h5>{title}</h5>
					<p>{dateUploaded.toLocaleString()}</p>
				</Col>
			</Row>
			<Row>
				<p className='h6'>{channelTitle}</p>
				<p>{description}</p>
			</Row>
		</Container>
	)
}

export default VideoDetails

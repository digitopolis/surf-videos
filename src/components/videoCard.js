import React from 'react'
import Card from 'react-bootstrap/Card'

const VideoCard = ({ snippet }) => {
	const thumbnailUrl = snippet.thumbnails.default.url
	return (
		<Card>
			<Card.Img variant='top' src={thumbnailUrl} />
			<Card.Body>
				<Card.Title>{snippet.title}</Card.Title>
				<Card.Subtitle className='mb-2 text-muted'>{snippet.channelTitle}</Card.Subtitle>
				<Card.Text>{snippet.description}</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default VideoCard

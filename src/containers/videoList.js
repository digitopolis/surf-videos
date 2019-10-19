import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import CardColumns from 'react-bootstrap/CardColumns'
import VideoCard from '../components/videoCard'

const VideoList = ({ videos, handleVideoSelect, loadMoreVideos, pageToken }) => {
	return (
		<Col md='auto'>
			<CardColumns>
				{videos.map(video => {
					return <VideoCard {...video}
										key={video.id.videoId}
										handleVideoSelect={handleVideoSelect}
								 />
				})}
			</CardColumns>
			<Row className='justify-content-center my-2'>
				{ pageToken
					? <Button variant='secondary' onClick={loadMoreVideos}>Load more</Button>
					: null }
			</Row>
		</Col>
	)
}

export default VideoList

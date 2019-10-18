import React from 'react'
import Col from 'react-bootstrap/Col'
import CardColumns from 'react-bootstrap/CardColumns'
import VideoCard from '../components/videoCard'

const VideoList = ({ videos, handleVideoSelect }) => {
	return (
		<Col>
			<CardColumns>
				{videos.map(video => {
					return <VideoCard {...video}
										key={video.id}
										handleVideoSelect={handleVideoSelect}
								 />
				})}
			</CardColumns>
		</Col>
	)
}

export default VideoList

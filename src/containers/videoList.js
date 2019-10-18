import React from 'react'
import Col from 'react-bootstrap/Col'
import CardColumns from 'react-bootstrap/CardColumns'
import VideoCard from '../components/videoCard'

const VideoList = ({ videos }) => {
	return (
		<Col>
			<CardColumns>
				{videos.map(video => {
					return <VideoCard {...video} />
				})}
			</CardColumns>
		</Col>
	)
}

export default VideoList

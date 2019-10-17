import React from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import VideoCard from '../components/videoCard'

const VideoList = ({ videos }) => {
	return (
		<CardColumns>
			{videos.map(video => {
				return <VideoCard {...video} />
			})}
		</CardColumns>
	)
}

export default VideoList

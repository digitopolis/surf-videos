import React from 'react'
import Col from 'react-bootstrap/Col'
import VideoPlayer from '../components/videoPlayer'
import VideoDetails from '../components/videoDetails'


const VideoContainer = ({ id, snippet }) => {
	return (
		<Col>
			<VideoPlayer videoId={id}/>
			<VideoDetails {...snippet}/>
		</Col>
	)
}

export default VideoContainer

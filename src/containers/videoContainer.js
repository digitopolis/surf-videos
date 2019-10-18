import React from 'react'
import Col from 'react-bootstrap/Col'
import VideoPlayer from '../components/videoPlayer'

const VideoContainer = (props) => {
	return (
		<Col>
			<VideoPlayer videoId={props.details.id}/>
		</Col>
	)
}

export default VideoContainer

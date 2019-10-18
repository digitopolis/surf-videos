import React from 'react'
import Row from 'react-bootstrap/Row'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

const VideoPlayer = (props) => {
	const youTubeUrl = 'https://www.youtube.com/embed/'
	return (
		<Row>
			<div className='iframeContainer'>
				<ResponsiveEmbed aspectRatio='16by9'>
					<embed type='video/mp4' src={youTubeUrl + props.videoId}/>
				</ResponsiveEmbed>
			</div>
		</Row>
	)
}

export default VideoPlayer

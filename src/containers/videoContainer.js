import React from 'react'
import Col from 'react-bootstrap/Col'
import VideoPlayer from '../components/videoPlayer'
import VideoDetails from '../components/videoDetails'
import VideoList from './videoList'


const VideoContainer = ({ id, snippet, videos, handleVideoSelect, loadMoreVideos }) => {
	return (
		<Col>
			<VideoPlayer videoId={id}/>
			<VideoDetails {...snippet}/>
			<VideoList
				videos={videos}
				handleVideoSelect={handleVideoSelect}
				loadMoreVideos={loadMoreVideos}
			/>
		</Col>
	)
}

export default VideoContainer

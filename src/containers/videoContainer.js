import React from 'react'
import Col from 'react-bootstrap/Col'
import VideoPlayer from '../components/videoPlayer'
import VideoDetails from '../components/videoDetails'
import VideoList from './videoList'


const VideoContainer = ({ id, snippet, videos, handleVideoSelect, loadMoreVideos, pageToken }) => {
	return (
		<Col>
			<VideoPlayer videoId={id}/>
			<VideoDetails {...snippet}/>
			<VideoList
				videos={videos}
				handleVideoSelect={handleVideoSelect}
				loadMoreVideos={loadMoreVideos}
				pageToken={pageToken}
			/>
		</Col>
	)
}

export default VideoContainer

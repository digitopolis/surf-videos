// api key from original repo
export const apiKey = 'AIzaSyBeimXtjgzfQcogY-fP8_CHPybmLpFaieo'

// get 25 video resources
export const YTSEARCH = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&maxResults=25`

// get a single video resource
export const ONEVIDEO = `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&part=snippet&`

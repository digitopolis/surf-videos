// api key from original repo
export const apiKey = 'AIzaSyBeimXtjgzfQcogY-fP8_CHPybmLpFaieo'

// get 25 surf video resources
export const SURFVIDEOS = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&maxResults=25&q=surf`

// get a single video resource
export const ONEVIDEO = `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&part=snippet&`

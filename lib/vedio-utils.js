```js
const { exec } = require('child_process')

/**
 * Trim video using ffmpeg
 * @param {string} inputFile - Input video path
 * @param {string} outputFile - Output trimmed video path
 * @param {string} startTime - Start time e.g. "00:00:05"
 * @param {string} duration - Duration e.g. "10" (seconds)
 * @returns {Promise<string>}
 */
function trimVideo(inputFile, outputFile, startTime, duration) {
  return new Promise((resolve, reject) => {
    const cmd = `ffmpeg -ss startTime -i{inputFile} -t duration -c copy -y{outputFile}`
    exec(cmd, (error) => {
      if (error) return reject(error)
      resolve(outputFile)
    })
  })
}

/**
 * Convert video format (e.g., mp4 to webm)
 * @param {string} inputFile
 * @param {string} outputFile
 * @returns {Promise<string>}
 */
function convertFormat(inputFile, outputFile) {
  return new Promise((resolve, reject) => {
    const cmd = `ffmpeg -i inputFile -c:v libvpx -c:a libvorbis -y{outputFile}`
    exec(cmd, (error) => {
      if (error) return reject(error)
      resolve(outputFile)
    })
  })
}
/**
 * Resize video (width x height)
 * @param {string} inputFile
 * @param {string} outputFile
 * @param {number} width
 * @param {number} height
 * @returns {Promise<string>}
 */
function resizeVideo(inputFile, outputFile, width, height) {
  return new Promise((resolve, reject) => {
    const cmd = `ffmpeg -i inputFile -vf scale={width}:height -y{outputFile}`
    exec(cmd, (error) => {
      if (error) return reject(error)
      resolve(outputFile)
    })
  })
}

module.exports = {
  trimVideo,
  convertFormat,
  resizeVideo
}
```

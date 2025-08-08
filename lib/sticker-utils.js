js
```javascript
const { writeFileSync, unlinkSync } = require('fs')
const { exec } = require('child_process')
const path = require('path')

/**
 * Convert image/video file to WebP sticker using ffmpeg
 * @param {string} inputFile - Path to source image/video
 * @param {string} outputFile - Path to save sticker (.webp)
 * @param {object} options - Optional metadata (packname, author)
 * @returns {Promise<string>} - Resolves outputFile path
 */
function createSticker(inputFile, outputFile, options = {}) {
  return new Promise((resolve, reject) => {
    const { packname = 'A,S-MD', author = 'Bot' } = options
    const metadata = `-metadata comment="packname |{author}"`

    const cmd = `ffmpeg -i inputFile -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0{metadata} -y ${outputFile}`
    
    exec(cmd, (error) => {
      if (error) return reject(error)
      resolve(outputFile)
    })
  })
}

/**
 * Delete temp files after processing
 * @param {string[]} files - Array of file paths to delete
 */
function cleanupFiles(files = []) {
  for (const file of files) {
  try {
      unlinkSync(file)
    } catch {}
  }
}

module.exports = {
  createSticker,
  cleanupFiles
}
```

---

⚙️ Requirements:

- *ffmpeg* installed & in system PATH (must be accessible from command line)
- Node.js `child_process` for running ffmpeg command

---
```

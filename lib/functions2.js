js
// functions.js — for A,S-MD Bot 🚀

const fs = require("fs");
const path = require("path");

// Read JSON file
function readJSON(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath));
  } catch (e) {
    return {};
  }
}

// Write JSON file
function writeJSON(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// Get file size (in KB or MB)
function getFileSize(bytes) {
  if (bytes < 1024) return bytes + " B";
  else if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  else return (bytes / (1024 * 1024)).toFixed(1) + " MB";
}

// Format string (capitalize first letter)
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Random string generator
function randomText(length = 6) {
  const chars = "abcdefghijklmnopqrstuvwxyz012345678";
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

module.exports = {
  readJSON,
  writeJSON,
getFileSize,
  capitalize,
  randomText
}

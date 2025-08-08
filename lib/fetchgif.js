js
const fetch = require('node-fetch');
const TENOR_API_KEY = 'LIVDSRZULELA'; // Default Tenor API key

/**
 * Fetches a GIF URL based on search query using Tenor API.
 * @param {string} query - The search keyword.
 * @returns {Promise<string|null>} - GIF URL or null if not found.
 */
async function fetchGif(query) {
  const url = `https://g.tenor.com/v1/search?q=encodeURIComponent(query)   key={TENOR_API_KEY}&limit=1`;

  try {
    const res = await fetch(url);
    const json = await res.json();

    if (json.results && json.results.length > 0) {
      console.log(`✅ A,S-MD fetched a GIF for: query`);
      return json.results[0].media[0].gif.url;
     else 
      console.warn(`⚠️ A,S-MD: No GIF found for "{query}"`);
      return null;
    }

  } catch (err) {
    console.error(`❌ A,S-MD Error fetching GIF:`, err);
    return null;
  }
}

module.exports = { fetchGif };
```

const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCJUYcEdvnYFGajHBW0Nao3w&part=snippet%2Cid&order=date&maxResults=25';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '83cc09063dmshe3993f0854adee6p123675jsn2ebf021ef19c',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
};
const content = document.getElementById('content');

async function fetchData(url) {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(url);
        console.log(videos);
        let view = `
        ${videos.items.map(video => `
          <div class="group relative">
            <a href="https://www.youtube.com/watch?v=${video.id.videoId}" target="_blank">
              <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.title}" class="w-full">
              </div>
              <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                  ${video.snippet.title}
                </h3>
              </div>
            </a>
          </div>
        `).slice(0, 4).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();


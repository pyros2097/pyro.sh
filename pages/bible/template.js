import { html, useState, useEffect, useRef } from 'web_modules/haunted.js';

export const head = ({ config, item }) => {
  const title = `${config.title} - ${item.title} Bible`;
  const description = `${item.title} Bible Audio Verse by Verse`;
  return html`
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="image" content="${config.image}" />
    <meta name="keywords" content="${config.title},${item.title},bibleaudio,chapter,verse" />
    <meta name="author" content="${config.author}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${config.url}" />
    <meta property="og:site_name" content="${config.title}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${config.image}" />
    <link rel="canonical" href="${config.url}" />
  `;
};

export const body = ({ item }) => {
  const isMobile = window.innerWidth < 600;
  const [bible, setBible] = useState();
  const [book, setBook] = useState();
  const [chapter, setChapter] = useState();
  const [showChapters, setShowChapters] = useState(false);
  const [loading, setLoading] = useState(true);
  const [higlightedVerses, setHighlightedVerses] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [showDrawer, setShowDrawer] = useState(!isMobile);
  const playingAudio = useRef();
  useEffect(() => fetchBible(), []);
  const fetchBible = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/assets/bibles/${item.title.toLowerCase()}.json`);
      setBible(await res.json());
      changeBook('Genesis');
    } finally {
      setLoading(false);
    }
  };
  const changeBook = (book, chapter = 1) => {
    setBook(book);
    setHighlightedVerses([]);
    setChapter(chapter);
    setShowChapters(false);
    if (isMobile) {
      setShowDrawer(false);
    }
  };
  const changeChapter = (i) => {
    changeBook(book, i);
  };
  const isHighlighted = (i) => {
    return higlightedVerses.indexOf(i) > -1;
  };
  const onVerseClick = (i) => {
    const index = higlightedVerses.indexOf(i);
    if (index === -1) {
      higlightedVerses.push(i);
    } else {
      higlightedVerses.splice(index, 1);
    }
    setHighlightedVerses(higlightedVerses);
  };
  const onPlayClick = async () => {
    if (playing) {
      setPlaying(false);
      if (playingAudio.current) {
        playingAudio.current.pause();
        playingAudio.current = null;
      }
    } else {
      setPlaying(true);
      for (const i of higlightedVerses) {
        await new Promise((resolve) => {
          const audio = new Audio(`/assets/audio/${item.title.toLowerCase()}/${book}/chapter_${chapter}/verse_${i + 1}.mp3`);
          audio.loop = false;
          audio.play();
          audio.addEventListener('ended', resolve);
          playingAudio.current = audio;
        });
      }
      setPlaying(false);
    }
  };
  if (loading) {
    return html`
      <div class="h-full w-full flex flex-col items-center justify-center">
        <h4 class="font-normal text-xl">Loading</h4>
      </div>
    `;
  }
  return html`
    <main class="w-full h-full flex flex-row">
      ${showDrawer
        ? html`<div class="h-full overflow-y-auto w-5/6 sm:w-auto flex bg-gray-100 border-r border-bibleborder">
            <div class="grid grid-cols-3 gap-2 ml-2">
              ${Object.keys(bible).map(
                (book) => html`<button class="text-md text-left p-1 hover:bg-gray-200" @click=${() => changeBook(book)}>${book}</button>`
              )}
            </div>
          </div>`
        : ''}
      <div class="w-1/6 sm:w-auto flex flex-1 flex-col p-0 ml-0 sm:px-4 sm:ml-2">
        <div class="flex flex-row items-center border-b border-bibleborder py-2 px-2">
          <div class="flex flex-row items-center">
            <button class="sm:hidden mr-2" @click=${() => setShowDrawer(!showDrawer)}>
              <svg class="fill-current" width="36" height="36" viewBox="0 0 24 24">
                <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z"></path>
              </svg>
            </button>
            <p class="font-normal text-xl">${book}</p>
            <p class="font-normal text-xl ml-2">${chapter}</p>
          </div>
          <div class="flex flex-row flex-1 items-center justify-end mr-6">
            <button class="text-black ${higlightedVerses.length === 0 ? 'text-gray-500 cursor-default' : ''}" @click=${onPlayClick}>
              ${playing
                ? html` <svg width="36" height="36" viewBox="0 0 24 24">
                    <path
                      d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"
                    ></path>
                    <path d="M13 9H15V15H13zM9 9H11V15H9z"></path>
                  </svg>`
                : html`<svg class="fill-current" width="36" height="36" viewBox="0 0 24 24">
                    <path
                      d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"
                    ></path>
                    <path d="M9 17L17 12 9 7z"></path>
                  </svg>`}
            </button>
          </div>
          <div class="relative inline-block text-left mr-2">
            <button
              type="button"
              class="inline-flex justify-center w-full rounded-md border border-bibleborder shadow-sm px-4 py-2 m-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              aria-haspopup="true"
              aria-expanded="true"
              @click=${() => setShowChapters(!showChapters)}
            >
              <span>${'Chapter ' + chapter}</span>
              <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            ${showChapters
              ? html`
                  <div
                    class="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 h-96 overflow-y-auto"
                  >
                    <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      ${bible[book].map((item, index) => {
                        return html`
                          <button
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${chapter === index + 1
                              ? 'bg-gray-100'
                              : ''}"
                            @click=${() => changeChapter(index + 1)}
                          >
                            ${'Chapter ' + (index + 1)}
                          </button>
                        `;
                      })}
                    </div>
                  </div>
                `
              : ''}
          </div>
        </div>
        <div class="h-full overflow-y-auto mb-2 ml-2 mr-2 sm:ml-0 sm:mr-0">
          ${bible[book][chapter - 1].map((verse, index) => {
            const highlightClass = isHighlighted(index) ? 'bg-newyellow' : '';
            return html`
              <div class="flex flex-1 flex-row mt-4 cursor-pointer items-baseline ${highlightClass}" @click=${() => onVerseClick(index)}>
                <p class="text-xs font-bold text-newred mr-2 ml-2 ${index < 9 ? 'ml-2' : ''}">${index + 1}</p>
                <p class="text-md text-black">${verse}</p>
              </div>
            `;
          })}
          <div class="pb-10 border-b border-bibleborder"></div>
        </div>
      </div>
    </main>
  `;
};

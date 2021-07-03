import { html } from 'atoms-element';
import '../../elements/app-bible.js';

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
  return html`
    <main class="w-full h-full flex flex-row">
      <app-bible class="w-full h-full" item=${item}></app-bible>
    </main>
  `;
};

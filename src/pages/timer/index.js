import { html } from 'atoms-element';
import '../../elements/app-timer.js';

export const head = ({ config }) => {
  const title = `${config.title} - Timer`;
  return html`
    <title>${title}</title>
    <meta name="description" content="${config.description}" />
    <meta name="image" content="${config.image}" />
    <meta name="keywords" content="${config.keywords}" />
    <meta name="author" content="${config.author}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${config.url}" />
    <meta property="og:site_name" content="${config.siteName}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${config.description}" />
    <meta property="og:image" content="${config.image}" />
  `;
};

export const body = () => {
  return html`
    <main class="bg-black w-full h-full flex flex-col flex-1 items-center justify-center">
      <app-timer class="w-full h-full"></app-timer>
    </main>
  `;
};

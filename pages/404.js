import { html } from 'web_modules/haunted.js';

export const head = ({ config }) => {
  const title = `${config.title} - Not Found`;
  return html`
    <title>${title}</title>
    <meta name="title" content="${title}" />
    <meta name="description" content="${config.description}" />
    <meta name="image" content="${config.image}" />
  `;
};

export const body = ({ config }) => {
  return html`
    <app-header></app-header>
    <main class="flex flex-1 flex-col mt-20 items-center">
      <h1 class="text-5xl">Page Not Found</h1>
      <h2 class="text-lg mt-20">
        <a class="underline" href="/">Go Back</a>
      </h1>
    </main>
  `;
};

import { html } from '../../../web_modules/fuco.js';

export const head = ({ config }) => {
  const title = `${config.title} - Indian Bible App`;
  const description = `Indian Bible App`;
  return html`
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="image" content="${config.image}" />
    <meta name="keywords" content="indian,bible,app,kannada" />
    <meta name="author" content="${config.author}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${config.url}" />
    <meta property="og:site_name" content="${config.siteName}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${config.image}" />
  `;
};

export const body = ({ data }) => {
  return html`
    <app-header></app-header>
    <main class="w-full h-full">
      <div class="h-full">
        <div class="w-full h-full flex flex-1 flex-col items-center">
          <div class="flex m-12">
            <h1 class="text-4xl text-center leading-loose">The Holy Bible in different Indian Languages</h1>
          </div>
          <div class="flex flex-1 items-start mt-40">
            ${data.bible.map(
              (item) => html`
                <a href="/bible/${item.slug}" class="bg-gray-300 text-gray-900 text-3xl rounded hover:bg-gray-200 px-8 py-4 focus:outline-none mx-10">
                  ${item.title}
                </a>
              `
            )}
          </div>
        </div>
      </div>
    </main>
  `;
};

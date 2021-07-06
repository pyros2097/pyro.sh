import { html } from 'atoms-element';
import '../../elements/app-header.js';

export const head = ({ config }) => {
  const title = `${config.title} - Blog`;
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

export const body = ({ data }) => {
  return html`
    <app-header></app-header>
    <main class="w-full h-full">
      <div class="w-full flex flex-1 flex-row justify-center">
        <div class="flex flex-row flex-1 items-center max-w-5xl text-lg font-source p-4 mt-4">
          <div class="flex flex-1 flex-col">
            <div class="flex flex-1 flex-col">
              ${data.blog
                .sort((a, b) => (b.uploadedOn > a.uploadedOn ? -1 : 1))
                .map(
                  (item) => html`
                    <div class="flex flex-1 flex-row mt-2">
                      <div class="flex-1">
                        <div>
                          ▪
                          <a class="ml-2 border-b border-black" href="${item.permaLink}"> ${item.title} </a>
                        </div>
                      </div>
                      <div class="">${item.uploadedOn}</div>
                    </div>
                  `,
                )}
            </div>
          </div>
        </div>
      </div>
    </main>
  `;
};

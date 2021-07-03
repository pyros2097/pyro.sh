import { html, unsafeHTML } from 'atoms-element';
import hljs from 'highlight.js';
import '../../elements/app-header.js';

export const head = ({ config, item }) => {
  return html`
    <title>${item.title}</title>
    <meta name="title" content="${item.title}" />
    <meta name="description" content="${config.description}" />
    <meta name="image" content="${config.image}" />
    <meta name="keywords" content="${config.keywords}" />
    <meta name="author" content="${config.author}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${config.url}" />
    <meta property="og:site_name" content="${config.siteName}" />
    <meta property="og:title" content="${item.title}" />
    <meta property="og:description" content="${config.description}" />
    <meta property="og:image" content="${config.image}" />
    <link rel="canonical" href="${config.url}" />
    <link rel="stylesheet" href="//unpkg.com/@highlightjs/cdn-assets@11.0.0/styles/default.min.css" />
  `;
};

export const body = ({ item }) => {
  return html`
    <app-header></app-header>
    <main class="w-full h-full">
      <div class="w-full flex flex-1 flex-row justify-center">
        <div class="flex flex-row flex-1 items-center max-w-5xl text-lg font-source p-4 mt-4">
          <div class="w-full flex flex-1 flex-row justify-center">
            <div class="flex flex-row flex-1 items-center max-w-5xl text-lg font-source p-4 mt-4">
              <div>
                <div class="flex pb-4 border-black border-b">
                  <div class="flex-1 text-2xl font-bold">${item.title}</div>
                  <div class="mr-4">${item.uploadedOn}</div>
                </div>
                ${item.description.map((text) => {
                  if (text) {
                    if (text.code) {
                      const codeblock = hljs.highlight(text.code, { language: 'go' });
                      // bg-codebg font-monospace text-sm rounded-md py-1 px-4 my-3 mr-4
                      return html`<p class="font-source mt-2">${unsafeHTML(codeblock.value)}</p>`;
                    }
                    if (text.img) {
                      return html`<div class="my-6"><img src="${text.img}" /></div>`;
                    }
                    return html` <p class="text-black font-source mt-2">${text}</p> `;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  `;
};

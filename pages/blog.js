import { html } from 'web_modules/haunted.js';

export const head = ({ config }) => {
  return html`
    <title>${config.title}</title>
    <meta name="description" content="${config.description}" />
    <meta name="image" content="${config.image}" />
    <meta name="keywords" content="${config.keywords}" />
    <meta name="author" content="${config.author}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${config.url}" />
    <meta property="og:site_name" content="${config.siteName}" />
    <meta property="og:title" content="${config.title}" />
    <meta property="og:description" content="${config.description}" />
    <meta property="og:image" content="${config.image}" />
    <link rel="canonical" href="${config.url}" />
    <script>
      navigator.serviceWorker.register('/bible/sw.js').then((reg) => {
        reg.onupdatefound = () => {
          const installing = reg.installing;
          if (installing == null) {
            return;
          }
          installing.onstatechange = () => {
            if (installing.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                reg.update();
                alert('A new Version of the app is Available. Updating Now.');
                window.location.reload();
              } else {
                console.log('Content is cached for offline use.');
              }
            }
          };
        };
      });
    </script>
    <script src="/assets/alpine.js" defer></script>
  `;
};

export const body = () => {
  return html`
    <app-header></app-header>
    <main class="w-full h-full">
      <div class="w-full flex flex-1 flex-row justify-center">
        <div class="flex flex-row flex-1 items-center max-w-5xl text-lg font-source p-4 mt-4">
          <div class="flex flex-1 flex-col">
            <div class="flex flex-1 flex-col">
              <div class="flex flex-1 flex-row mt-2">
                <div class="flex-1">
                  <div>
                    ▪
                    <a class="ml-2 border-b border-black" href="/blog/gopibot-to-the-rescue"> Gopibot to the rescue </a>
                  </div>
                </div>
                <div class="">2017-10-04</div>
              </div>
              <div class="flex flex-1 flex-row mt-2">
                <div class="flex-1">
                  <div>
                    ▪
                    <a class="ml-2 border-b border-black" href="/blog/eyecandy-golang-error-reporting"> Eyecandy golang error reporting </a>
                  </div>
                </div>
                <div class="">2016-09-17</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  `;
};

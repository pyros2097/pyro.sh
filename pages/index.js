import { html } from 'web_modules/haunted.js';

function slider() {
  return {
    index: 1,
    rightToLeft: false,
    changeSlide(i) {
      if (i > this.index) {
        this.rightToLeft = true;
      } else {
        this.rightToLeft = false;
      }
      this.index = i;
    },
    transitions(state) {
      switch (state) {
        case 'enter':
          return `transition-all duration-500`;
        case 'enter-start':
          return this.rightToLeft ? 'transform translate-x-full' : 'transform -translate-x-full';
        case 'enter-end':
          return 'transform translate-x-0';
        case 'leave':
          return `absolute transition-all duration-500`;
        case 'leave-start':
          return 'transform translate-x-0';
        case 'leave-end':
          return this.rightToLeft ? 'transform -translate-x-full' : 'transform translate-x-full';
      }
    },
  };
}

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
    <link rel="alternate icon" type="image/png" href="/assets/icon.png" />
    <link rel="apple-touch-icon" type="image/png" href="/assets/icon.png" />
    <script src="/assets/alpine.js" defer></script>
  `;
};

export const body = () => {
  return html`
    <app-header></app-header>
    <main class="w-full h-full">
      <script>
        ${slider.toString()};
      </script>
      <div class="w-full flex flex-1 flex-row justify-center">
        <div class="flex flex-row flex-1 items-center max-w-5xl text-lg font-source p-2 mt-4 sm:p-4">
          <div>
            <div>
              Hi there, I'm <strong>Peter John</strong>, a fullstack developer from Bangalore, India. I love writing code and I am lucky enough to do
              this as my job. I currently work for Equal Experts. I have a strong passion for golang but I also work with react and nodejs.
              <p>
                I like to work on open source and hobby projects. Over the course of 8 years I've accumlated a lot of useful projects used by many
                people around the world.
              </p>
            </div>
            <article>
              <div class="pt-10" x-data="slider()">
                <ul class="flex flex-row mb-4">
                  <template x-for="item in [1, 2, 3 ,4, 5]" :key="item">
                    <li
                      class="px-3 py-1 cursor-pointer select-none"
                      :class="{ 'bg-black text-white': index === item, 'hover:bg-gray-300': index !== item}"
                      @click="changeSlide(item)"
                      x-text="item"
                    ></li>
                  </template>
                </ul>
                <div class="bg-slider mb-8 rounded-sm overflow-hidden">
                  <div class="flex flex-row relative w-full overflow-hidden">
                    <div
                      class="flex flex-col sm:flex-row w-full p-4 sm:p-8"
                      x-show="index === 1"
                      :x-transition:enter="transitions('enter')"
                      :x-transition:enter-start="transitions('enter-start')"
                      :x-transition:enter-end="transitions('enter-end')"
                      :x-transition:leave="transitions('leave')"
                      :x-transition:leave-start="transitions('leave-start')"
                      :x-transition:leave-end="transitions('leave-end')"
                    >
                      <div class="sm:w-5/12 flex flex-1 flex-col mr-8">
                        <p class="text-2xl font-bold mb-4">Website</p>
                        <p class="leading-6 mb-4">This website is hosted on a Raspberry Pi 4 with 4GB RAM. The host IP is 106.51.19.44.</p>
                        <p class="leading-6">
                          Makes it easier for me to deploy stuff to immediately. But at the consequence of higher latency for people living outside
                          India.
                        </p>
                      </div>
                      <div class="flex-1 mt-8 sm:mt-0 sm:w-4/12 bg-white border-black border rounded-sm flex flex-col items-center justify-center">
                        <div class="p-4">
                          <img src="/assets/images/pi4.jpg" width="300" />
                        </div>
                      </div>
                    </div>

                    <div
                      class="flex flex-col sm:flex-row w-full p-4 sm:p-8"
                      x-show="index === 2"
                      :x-transition:enter="transitions('enter')"
                      :x-transition:enter-start="transitions('enter-start')"
                      :x-transition:enter-end="transitions('enter-end')"
                      :x-transition:leave="transitions('leave')"
                      :x-transition:leave-start="transitions('leave-start')"
                      :x-transition:leave-end="transitions('leave-end')"
                    >
                      <div class="sm:w-5/12 flex flex-1 flex-col mr-8">
                        <p class="text-2xl font-bold mb-4">rust-embed</p>
                        <p class="leading-6 mb-4">
                          A rust macro which loads files into the rust binary at compile time during release and loads the file from the fs during
                          dev.
                        </p>
                        <p class="leading-6">
                          You can use this to embed your css, js and images into a single executable which can be deployed to your servers. Also it
                          makes it easy to build a very small docker image for you to deploy.
                        </p>
                      </div>
                      <div class="flex-1 mt-8 sm:mt-0 sm:w-4/12 bg-white border-black border rounded-sm flex flex-col items-center justify-center">
                        <div class="p-4">
                          <img src="/assets/images/rust-embed.png" width="100%" />
                        </div>
                      </div>
                    </div>

                    <div
                      class="flex flex-col sm:flex-row w-full p-4 sm:p-8"
                      x-show="index === 3"
                      :x-transition:enter="transitions('enter')"
                      :x-transition:enter-start="transitions('enter-start')"
                      :x-transition:enter-end="transitions('enter-end')"
                      :x-transition:leave="transitions('leave')"
                      :x-transition:leave-start="transitions('leave-start')"
                      :x-transition:leave-end="transitions('leave-end')"
                    >
                      <div class="sm:w-5/12 flex flex-1 flex-col mr-8">
                        <p class="text-2xl font-bold mb-4">wapp</p>
                        <p class="leading-6 mb-4">wapp is a framework to build isomorphic web apps in golang.</p>
                        <p class="leading-6">
                          It uses a declarative syntax using funcs that allows creating and dealing with HTML elements only by using Go, and without
                          writing any HTML markup. The syntax is inspired by react and its awesome hooks and functional component features. It is
                          highly opioninated and integrates very well with tailwind css for now.
                        </p>
                      </div>
                      <div class="flex-1 mt-8 sm:mt-0 sm:w-4/12 bg-white border-black border rounded-sm flex flex-col items-center justify-center">
                        <div class="p-4">
                          <img src="/assets/images/rust-embed.png" width="100%" />
                        </div>
                      </div>
                    </div>

                    <div
                      class="flex flex-col sm:flex-row w-full p-4 sm:p-8"
                      x-show="index === 4"
                      :x-transition:enter="transitions('enter')"
                      :x-transition:enter-start="transitions('enter-start')"
                      :x-transition:enter-end="transitions('enter-end')"
                      :x-transition:leave="transitions('leave')"
                      :x-transition:leave-start="transitions('leave-start')"
                      :x-transition:leave-end="transitions('leave-end')"
                    >
                      <div class="sm:w-5/12 flex flex-1 flex-col mr-8">
                        <p class="text-2xl font-bold mb-4">Pine</p>
                        <p class="leading-6 mb-4">
                          A programming language with a syntax largely inspired by nim but with the simplicity of go. It has jsx support in built by
                          default.
                        </p>
                        <p class="leading-6">
                          first class functions clean syntax basics: int, float, bool, byte, enum references: string, array, map, nil, error
                          functions: extern, proc, method, test conditions: if, elif, else, match, break, continue loops: for inbuilt: echo, assert
                        </p>
                      </div>
                      <div class="flex-1 mt-8 sm:mt-0 sm:w-4/12 bg-white border-black border rounded-sm flex flex-col items-center justify-center">
                        <div class="p-4">
                          <img src="/assets/images/pine.png" width="50%" />
                        </div>
                      </div>
                    </div>

                    <div
                      class="flex flex-col sm:flex-row w-full p-4 sm:p-8"
                      x-show="index === 5"
                      :x-transition:enter="transitions('enter')"
                      :x-transition:enter-start="transitions('enter-start')"
                      :x-transition:enter-end="transitions('enter-end')"
                      :x-transition:leave="transitions('leave')"
                      :x-transition:leave-start="transitions('leave-start')"
                      :x-transition:leave-end="transitions('leave-end')"
                    >
                      <div class="sm:w-5/12 flex flex-1 flex-col mr-8">
                        <p class="text-2xl font-bold mb-4">Gdx Studio</p>
                        <p class="leading-6 mb-4">GdxStudio is used for creating awesome games using libGdx.</p>
                        <p class="leading-6">
                          It has all the features of libgdx built-in so you can easily,start creating games with it. Automatic Asset Loading including
                          Atlas, TextureRegions, BitmapFonts, Music, Sound. Tools like Font Editor, Particle Editor, Texture Packer, SceneEditor,
                          MapEditor, ActorEditor, ImagingTools are already built into it.
                        </p>
                      </div>
                      <div class="flex-1 mt-8 sm:mt-0 sm:w-4/12 bg-white border-black border rounded-sm flex flex-col items-center justify-center">
                        <div class="p-4">
                          <img src="/assets/images/gdx-studio.png" width="100%" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="clear"></div>
            </article>
            <div class="flex flex-col sm:flex-row">
              <div class="flex flex-1 flex-col">
                <div>
                  <div class="text-2xl font-bold mt-6"><i class="icon-sitemap"></i>Interests</div>
                  <div class="mt-6">These are some of the stuff I work on</div>
                  <div class="grid grid-cols-3 gap-2 mt-6">
                    <li>HTML</li>
                    <li>Javascript</li>
                    <li>CSS</li>
                    <li>SVG</li>
                    <li>Go</li>
                    <li>Rust</li>
                    <li>Nodejs</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>Reactjs</li>
                    <li>Serverless</li>
                    <li>Alpinejs</li>
                  </div>
                </div>
              </div>
              <div class="flex flex-1 flex-col">
                <div>
                  <div class="text-2xl font-bold mt-6"><i class="icon-chat"></i> Contact</div>
                  <div class="mt-6">You can contact me through any of these methods</div>
                  <div class="mt-6 text-lg">
                    <div>Email: <a class="text-md text-newblue ml-1" href="mailto:pyros2097@gmail.com">pyros2097@gmail.com</a></div>
                    <div class="mt-2">Github: <a class="text-md text-newblue ml-1" href="https://github.com/pyros2097">pyros2097</a></div>
                    <div class="mt-2">LinkedIn: <a class="text-md text-newblue ml-1" href="https://www.linkedin.com/in/pyros2097">pyros2097</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  `;
};

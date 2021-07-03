import { html, classMap } from 'atoms-element';
import '../elements/app-header.js';
import '../elements/app-slide.js';

export const head = ({ config }) => {
  return html`
    <title>${config.title}</title>
    <meta name="description" content=${config.description} />
    <meta name="image" content=${config.image} />
    <meta name="keywords" content=${config.keywords} />
    <meta name="author" content=${config.author} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content=${config.url} />
    <meta property="og:site_name" content=${config.siteName} />
    <meta property="og:title" content=${config.title} />
    <meta property="og:description" content=${config.description} />
    <meta property="og:image" content=${config.image} />
    <link rel="alternate icon" type="image/png" href="/assets/icon.png" />
    <link rel="apple-touch-icon" type="image/png" href="/assets/icon.png" />
  `;
};

const slides = [
  {
    title: 'Website',
    subTitle: 'This website is hosted on a Raspberry Pi 4 with 4GB RAM. The host IP is 106.51.19.44.',
    description: 'Makes it easier for me to deploy stuff to immediately. But at the consequence of higher latency for people living outside India.',
    imgSrc: '/assets/images/pi4.jpg',
    imgWidth: '300',
  },
  {
    title: 'rust-embed',
    subTitle: 'A rust macro which loads files into the rust binary at compile time during release and loads the file from the fs during dev.',
    description:
      'You can use this to embed your css, js and images into a single executable which can be deployed to your servers. Also it makes it easy to build a very small docker image for you to deploy.',
    imgSrc: '/assets/images/rust-embed.png',
    imgWidth: '100%',
  },
  {
    title: 'wapp',
    subTitle: 'wapp is a framework to build isomorphic web apps in golang.',
    description:
      'It uses a declarative syntax using funcs that allows creating and dealing with HTML elements only by using Go, and without writing any HTML markup. The syntax is inspired by react and its awesome hooks and functional component features. It is highly opioninated and integrates very well with tailwind css for now.',
    imgSrc: '/assets/images/rust-embed.png',
    imgWidth: '100%',
  },
  {
    title: 'Pine',
    subTitle: 'A programming language with a syntax largely inspired by nim but with the simplicity of go. It has jsx support in built by default.',
    description:
      'first class functions clean syntax basics: int, float, bool, byte, enum references: string, array, map, nil, error functions: extern, proc, method, test conditions: if, elif, else, match, break, continue loops: for inbuilt: echo, assert',
    imgSrc: '/assets/images/pine.png',
    imgWidth: '50%',
  },
  {
    title: 'Gdx Studio',
    subTitle: 'GdxStudio is used for creating awesome games using libGdx.',
    description:
      'It has all the features of libgdx built-in so you can easily,start creating games with it. Automatic Asset Loading including Atlas, TextureRegions, BitmapFonts, Music, Sound. Tools like Font Editor, Particle Editor, Texture Packer, SceneEditor, MapEditor, ActorEditor, ImagingTools are already built into it.',
    imgSrc: '/assets/images/gdx-studio.png',
    imgWidth: '100%',
  },
];

export const body = () => {
  // const [item, setItem] = useState(0);
  const item = 0;
  const currentSlide = slides[item];
  return html`
    <app-header></app-header>
    <main class="w-full h-full">
      <div class="w-full flex flex-1 flex-row justify-center">
        <div class="flex flex-row flex-1 items-center max-w-5xl text-lg font-source p-2 mt-4 sm:p-4">
          <div>
            <div>
              Hi there, I'm <strong>Peter John</strong>, a fullstack developer from Bangalore, India. I love writing code and I am lucky enough to do this as my
              job. I currently work for Equal Experts. I have a strong passion for golang but I also work with react and nodejs.
              <p>
                I like to work on open source and hobby projects. Over the course of 8 years I've accumlated a lot of useful projects used by many people around
                the world.
              </p>
            </div>
            <article>
              <div class="pt-10">
                <ul class="flex flex-row mb-4">
                  ${slides.map((_, index) => {
                    const selected = index === item;
                    return html`
                      <li
                        @click=${() => setItem(index)}
                        class="px-3 py-1 cursor-pointer select-none ${classMap({
                          'bg-black': selected,
                          'text-white': selected,
                          'hover:bg-gray-300': index !== item,
                        })}"
                      >
                        ${index + 1}
                      </li>
                    `;
                  })}
                </ul>
                <div class="bg-slider mb-8 rounded-sm overflow-hidden">
                  <div class="flex flex-row relative w-full overflow-hidden">
                    <app-slide
                      title=${currentSlide.title}
                      subTitle=${currentSlide.subTitle}
                      description=${currentSlide.description}
                      imgSrc=${currentSlide.imgSrc}
                      imgWidth=${currentSlide.imgWidth}
                    >
                    </app-slide>
                  </div>
                </div>
              </div>
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

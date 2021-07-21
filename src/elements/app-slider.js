import { html, defineElement, string, array, object, classMap, useState } from 'atoms-element';

const attrTypes = {
  items: array(
    object({
      title: string.isRequired,
      subTitle: string.isRequired,
      description: string.isRequired,
      imgSrc: string.isRequired,
      imgWidth: string.isRequired,
    }).isRequired,
  ).isRequired,
};

const Slider = ({ items }) => {
  const [{ title, subTitle, description, imgSrc, imgWidth }, setCurrent] = useState(items[0]);
  return html`
    <article>
      <div class="pt-10">
        <ul class="flex flex-row mb-4">
          ${items.map((item, index) => {
            const selected = title === item.title;
            return html`
              <li
                @click=${() => setCurrent(item)}
                class="px-3 py-1 cursor-pointer select-none ${classMap({
                  'bg-black': selected,
                  'text-white': selected,
                  'hover:bg-gray-300': !selected,
                })}"
              >
                ${index + 1}
              </li>
            `;
          })}
        </ul>
        <div class="bg-slider mb-8 rounded-sm overflow-hidden">
          ${title === 'Website'
            ? html`<div class="flex flex-row relative w-full overflow-hidden">
                <div class="flex flex-col sm:flex-row w-full p-4 sm:p-8">
                  <div class="sm:w-5/12 flex flex-1 flex-col mr-8">
                    <p class="text-2xl font-bold mb-4">${title}</p>
                    <p class="leading-6 mb-4">
                      This website is built with
                      <a class="link" href="https://github.com/pyros2097/density-ssg" target="_blank" rel="noopener noreferrer">density-ssg</a>, a web
                      components based opinionated Static Site Generator (SSG).
                    </p>
                    <p class="leading-6">${description}</p>
                  </div>
                  <div class="flex-1 mt-8 sm:mt-0 sm:w-4/12 bg-white border-black border rounded-sm flex flex-col items-center justify-center">
                    <div class="p-4">
                      <img src=${imgSrc} alt=${title} width=${imgWidth} />
                    </div>
                  </div>
                </div>
              </div>`
            : html`<div class="flex flex-row relative w-full overflow-hidden">
                <div class="flex flex-col sm:flex-row w-full p-4 sm:p-8">
                  <div class="sm:w-5/12 flex flex-1 flex-col mr-8">
                    <p class="text-2xl font-bold mb-4">${title}</p>
                    <p class="leading-6 mb-4">${subTitle}</p>
                    <p class="leading-6">${description}</p>
                  </div>
                  <div class="flex-1 mt-8 sm:mt-0 sm:w-4/12 bg-white border-black border rounded-sm flex flex-col items-center justify-center">
                    <div class="p-4">
                      <img src=${imgSrc} alt=${title} width=${imgWidth} />
                    </div>
                  </div>
                </div>
              </div>`}
        </div>
      </div>
    </article>
  `;
};

defineElement('app-slider', Slider, attrTypes);

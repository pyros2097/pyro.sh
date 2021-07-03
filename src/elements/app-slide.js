import { html, defineElement, string } from 'atoms-element';

const attrTypes = {
  title: string.isRequired,
  subTitle: string.isRequired,
  description: string.isRequired,
  imgSrc: string.isRequired,
  imgWidth: string.isRequired,
};

const Slide = ({ title, subTitle, description, imgSrc, imgWidth }) => {
  return html`
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
  `;
};

defineElement('app-slide', Slide, attrTypes);

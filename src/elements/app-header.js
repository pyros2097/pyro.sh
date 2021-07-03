import { html, defineElement } from 'atoms-element';

const Header = () => {
  return html`
    <header>
      <nav>
        <div class="w-full flex flex-1 flex-row justify-center bg-newblack">
          <div class="flex flex-row flex-1 items-center max-w-5xl font-monospace text-white p-3">
            <a class="flex text-newyellow text-xl sm:text-2xl pl-1 pr-4" href="/"> pyros </a>
            <div class="flex flex-row flex-1 items-center text-base sm:text-lg">
              <a class="px-2 mx-1 hover:bg-gray-700" href="/work"> work </a>
              <div class="text-lg">|</div>
              <a class="px-2 mx-1 hover:bg-gray-700" href="/ref"> ref </a>
              <div class="text-lg">|</div>
              <a class="px-2 mx-1 hover:bg-gray-700" href="/blog"> blog </a>
              <div class="text-lg">|</div>
              <a class="px-2 mx-1 hover:bg-gray-700" href="/bible"> bible </a>
              <div class="text-lg">|</div>
              <a class="px-2 mx-1 hover:bg-gray-700" href="/timer"> timer </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  `;
};

defineElement('app-header', Header);

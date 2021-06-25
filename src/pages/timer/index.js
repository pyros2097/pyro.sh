import { html, useState, useRef } from '../../../web_modules/fuco.js';

export const head = ({ config }) => {
  const title = `${config.title} - Timer`;
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

const pad = (value) => ('0' + parseInt(value)).slice(-2);

export const body = () => {
  const [endTime, setEndTime] = useState(10);
  const [running, setRunning] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState(0);
  const timerRef = useRef();
  const stopTimer = () => {
    setRunning(false);
    clearInterval(timerRef.current);
  };
  const toggleTimer = () => {
    if (!running && endTime > 0) {
      setRunning(true);
      timerRef.current = setInterval(() => {
        setEndTime((t) => {
          const nextTick = t - 1;
          if (nextTick === 0) {
            stopTimer();
          }
          return nextTick;
        });
      }, 1000);
    } else {
      stopTimer();
    }
  };
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const onInputChange = (e) => {
    setValue(parseInt(e.target.value));
  };
  const save = () => {
    setEndTime(value * 60);
    closeModal();
  };
  const hours = Math.floor(endTime / (60 * 60));
  const minutes = Math.floor((endTime % (60 * 60)) / 60);
  const seconds = Math.ceil((endTime % (60 * 60)) % 60);
  return html`
    <main class="bg-black w-full h-full flex flex-col flex-1 items-center justify-center">
      <div class="flex flex-1 flex-row items-center justify-center">
        <h1 class="clock-text">${pad(hours) + ':'}</h1>
        <h1 class="clock-text mx-16">${pad(minutes) + ':'}</h1>
        <h1 class="clock-text">${pad(seconds)}</h1>
      </div>
      <div class="flex flex-row mb-16">
        <button class="btn1" @click=${toggleTimer}>${running ? 'Stop' : 'Start'}</button>
        <button class="btn1" @click=${openModal}>Set Timer</button>
      </div>
      ${
        showModal
          ? html`<div class="flex flex-col items-center justify-center z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed">
              <div class="flex flex-col items-center justify-center z-50 relative p-3 mx-auto my-0 w-6/12">
                <div class="bg-white rounded shadow-lg border flex flex-col overflow-hidden">
                  <div class="flex flex-row justify-start border-b">
                    <div class="flex-1 px-6 py-3 text-xl font-bold">Set Timer</div>
                    <div class="px-6 py-1 text-2xl font-bold cursor-pointer select-none" @click=${closeModal}>x</div>
                  </div>
                  <div class="flex flex-col items-center justify-center p-6 flex-grow">
                    Enter Countdown in minutes
                    <input
                      class="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
                      type="number"
                      value="0"
                      @input=${onInputChange}
                    />
                  </div>
                  <div class="px-6 py-3 border-t">
                    <div class="flex justify-end">
                      <button class="bg-gray-700 text-gray-100 rounded px-4 py-2 mr-1" @click=${closeModal}>Cancel</button>
                      <button class="bg-blue-600 text-gray-200 rounded px-4 py-2 disabled:opacity-50" @click=${save}>Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>`
          : ''
      }
      </div>
    </main>
  `;
};

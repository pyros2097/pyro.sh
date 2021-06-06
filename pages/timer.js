import { html } from 'web_modules/haunted.js';

function timer(minutes) {
  return {
    remaining: minutes * 60,
    modalVisible: false,
    ref: null,
    inputValue: 0,
    startStop() {
      if (!this.ref) {
        this.countDown();
        this.ref = setInterval(() => {
          this.countDown();
        }, 1000);
      } else {
        this.stopTimer();
      }
    },
    stopTimer() {
      clearInterval(this.ref);
      this.ref = null;
    },
    countDown() {
      this.remaining--;
      if (this.remaining === 0 || this.remaining < 0) {
        this.stopTimer();
      }
    },
    showModal() {
      this.modalVisible = true;
    },
    closeModal() {
      this.modalVisible = false;
    },
    save() {
      this.stopTimer();
      this.remaining = parseInt(this.inputValue, 10) * 60;
      this.modalVisible = false;
    },
    days() {
      return {
        value: this.remaining / 86400,
        remaining: this.remaining % 86400,
      };
    },
    hours() {
      return {
        value: this.days().remaining / 3600,
        remaining: this.days().remaining % 3600,
      };
    },
    minutes() {
      return {
        value: this.hours().remaining / 60,
        remaining: this.hours().remaining % 60,
      };
    },
    seconds() {
      return {
        value: this.minutes().remaining,
      };
    },
    format(value) {
      return ('0' + parseInt(value)).slice(-2);
    },
    time() {
      return {
        days: this.format(this.days().value),
        hours: this.format(this.hours().value),
        minutes: this.format(this.minutes().value),
        seconds: this.format(this.seconds().value),
      };
    },
  };
}

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
    <link rel="canonical" href="${config.url}" />
    <script src="/assets/alpine.js" defer></script>
  `;
};

export const body = () => {
  return html`
    <script>
      ${timer.toString()};
    </script>
    <main class="bg-black w-full h-full flex flex-col flex-1 items-center justify-center" x-data="timer(90)">
      <div class="flex flex-1 flex-row items-center justify-center">
        <h1 class="clock-text" x-text="time().hours + ':'"></h1>
        <h1 class="clock-text mx-16" x-text="time().minutes + ':'"></h1>
        <h1 class="clock-text" x-text="time().seconds"></h1>
      </div>
      <div class="flex flex-row mb-16">
        <button class="btn1" x-text="ref ? 'Stop': 'Start'" @click="startStop()"></button>
        <button class="btn1" @click="showModal()">Set Timer</button>
      </div>
      <div
        class="flex flex-col items-center justify-center z-40 overflow-auto left-0 top-0 bottom-0 right-0 w-full h-full fixed"
        x-show="modalVisible"
      >
        <div class="flex flex-col items-center justify-center z-50 relative p-3 mx-auto my-0 w-6/12">
          <div class="bg-white rounded shadow-lg border flex flex-col overflow-hidden">
            <div class="flex flex-row justify-start border-b">
              <div class="flex-1 px-6 py-3 text-xl font-bold">Set Timer</div>
              <div class="px-6 py-1 text-2xl font-bold cursor-pointer select-none" @click="closeModal()">x</div>
            </div>
            <div class="flex flex-col items-center justify-center p-6 flex-grow">
              Enter Countdown in minutes
              <input
                class="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
                type="number"
                value="0"
                x-on:input="inputValue=$event.target.value"
              />
            </div>
            <div class="px-6 py-3 border-t">
              <div class="flex justify-end">
                <button class="bg-gray-700 text-gray-100 rounded px-4 py-2 mr-1" @click="closeModal()">Cancel</button>
                <button class="bg-blue-600 text-gray-200 rounded px-4 py-2 disabled:opacity-50" @click="save()">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  `;
};

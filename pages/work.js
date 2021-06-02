import { html } from 'web_modules/haunted.js';

export const head = ({ config }) => {
  const title = `${config.title} - Work`;
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
  `;
};

export const body = () => {
  return html`
    <app-header></app-header>
    <main class="w-full h-full">
      <div class="w-full flex flex-1 flex-row justify-center">
        <div class="flex flex-row flex-1 items-center max-w-5xl text-lg font-source p-4 mt-4">
          <div>
            <div>
              I'm currently a tech lead at Equal Experts. I have around 7 years of work experience. I've mostly worked with startups and product based
              companies. I have gained a lot of domain specific knowledge in healthcare and finance during these startup years.
            </div>
            <div>These are some of the products I've worked on,</div>
            <div class="flex flex-row">
              <div class="flex flex-1 flex-col">
                <div>
                  <div class="text-2xl font-bold mt-8">iOWNA</div>
                  <div>
                    iOWNA is a digital app that provides clinicians with a library of trusted guidance in a patient friendly format that they have at
                    their fingertips to distribute to their patients to improve outcomes and enable people live longer healthier lives.
                  </div>
                </div>
                <div>
                  <div class="text-2xl font-bold mt-8">LifeBox</div>
                  <div>
                    LifeBox is a smart ePOA and health record system which supports pre-surgical patient assessment, hospital decision-making and
                    treatment.
                  </div>
                </div>
                <div>
                  <div class="text-2xl font-bold mt-8">Numberz AR</div>
                  <div>An accounting app to help companies get their invoices paid faster and reconcile with the bank.</div>
                </div>
                <div>
                  <div class="text-2xl font-bold mt-8">Numberz CFM</div>
                  <div>An invoicing and payment app to help SME businesses handle their cash flow properly and avail loans.</div>
                </div>
                <div>
                  <div class="text-2xl font-bold mt-8">Catalyst</div>
                  <div>
                    An employee engagement app built using the playlyfe v3 gamification api. Used by the likes of HP, Accenture to improve their call
                    center performance metrics.
                  </div>
                </div>
                <div>
                  <div class="text-2xl font-bold mt-8">Playlyfe</div>
                  <div>A gamification as a service platform where developers could gamify their apps and websites easily.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  `;
};

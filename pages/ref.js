import { html } from 'web_modules/haunted.js';

export const head = ({ config }) => {
  const title = `${config.title} - Reference`;
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
              Programming is my passion. I've been coding from a very young age and still do so. I have created and contributed to many open source
              projects. My main interest lies in is backend, frontend, and devops. I build frameworks and automate common tasks to make it easier to
              develop applications. I do occasionally work on creating 2d games.
            </div>
            <div class="flex flex-1 flex-col">
              <div class="text-2xl font-bold mt-6">Experience</div>
              <div class="mb-4">
                <div class="text-xl font-bold mt-6">Equal Experts</div>
                <div class="text-lg font-semibold mt-1">Software Developer, Oct 2018 - present</div>
                <p class="text-black font-source mt-2">
                  Making Software. Better. Equal Experts is a network of talented, experienced software consultants, specialising in agile delivery.
                </p>
                <div>
                  These are the client projects I worked on,
                  <ul class="mt-2 ml-6 sm:ml-10 list-disc list-outside">
                    <li>
                      iOWNA
                      <ul class="mt-2 ml-6 sm:ml-10 list-disc list-outside">
                        <li>Built a content editor for curators to create content on our platform</li>
                        <li>Built the iOWNA crossplatform app in react-native that works in android, ios, web. One codebase.</li>
                      </ul>
                    </li>
                    <li>
                      Zeta
                      <ul class="mt-2 ml-6 sm:ml-10 list-disc list-outside">
                        <li>Used k8s operator framework to automate creating acls in sandbox using custom resources</li>
                        <li>Created a Groovy Script to automate creating acls in sandbox authorization framework</li>
                        <li>Added multiple formats(pdf,html,xlsx) to download reports in Report Center</li>
                        <li>Integrated Camunda Workflow Engine into Zeta services in Operations Center</li>
                      </ul>
                    </li>
                    <li>
                      Lifebox
                      <ul class="mt-2 ml-6 sm:ml-10 list-disc list-outside">
                        <li>Added search functionaLity to the hospital procedure codes</li>
                        <li>Converted the Health Questionnaire from json to go structs/funcs making it easier to make changes to it</li>
                        <li>Integrated with SAP using HL7 message format to create patients, episodes, schedule/cancel procedures</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="mb-4">
                <div class="text-xl font-bold mt-6">Numberz</div>
                <div class="text-lg font-semibold mt-1">Full Stack Developer, Sept 2016 - Oct 2018</div>
                <p class="text-black font-source mt-2">
                  Numberz integrates banking with your day-2-day business work-flows freeing up a lot of effort, time and heart-burn, to help your
                  business grow! You’ll never have to spend time syncing information between different systems. Save and record receipts &amp; spends
                  with a single tap, automatically categorise transactions for book-keeping and easily share information with your accountant.
                </p>
                <ul class="mt-2 ml-6 sm:ml-10 list-disc list-outside">
                  <li>Implemented new features and fixed bugz on the numberz android app</li>
                  <li>Integrated numberz with Tally ERP</li>
                  <li>Implemented CI and Devops within out system to ease our deployment process using docker and docker-compose</li>
                  <li>Created a slack bot called deploybot which was used to deploy our microservices to our servers</li>
                  <li>Started tech talks on Thursdays to discuss cutting edge technologies</li>
                  <li>Architected and built the Notification Service using rabbitmq and nodejs</li>
                  <li>Built the Multi-User and Multi-Company Features</li>
                  <li>
                    Implemented and lead a team on integration with the GSTN System so that customers could file their GST Taxes within our product
                  </li>
                  <li>Architected and built the numberz Identity Management Service(IMS)</li>
                  <li>Architected our new product called the Numberz Accounts Receivable (AR)</li>
                  <li>Laid down the architecture for the frontend and backend</li>
                  <li>
                    Built these core features for our new AR Product - Auto Reminders, Manual Reminders, User Management, Cash Discounting, CFO
                    Dashboard Metrics
                  </li>
                </ul>
              </div>
              <div class="mb-4">
                <div class="text-xl font-bold mt-6">Playlyfe</div>
                <div class="text-lg font-semibold mt-1">Full Stack Developer, Apr 2014 - Sept 2016</div>
                <p class="text-black font-source mt-2">
                  Playlyfe is an online Gamification Platform which empowers anyone to design and implement a gamified system.This platform allows a
                  normal user to convert a gamified system's design into a fully functional web-application complete with teams, real-time
                  notifications, leaderboards and many more features. Made Critical decisions on what tech stack to switch to for our gamification
                  product Catalyst.
                </p>
                <ul class="mt-2 ml-6 sm:ml-10 list-disc list-outside">
                  <li>Built the Playlyfe Hybrid Mobile app using Phonegap for Android and iOS</li>
                  <li>Built the leaderboard system using Mongodb, Redis and Couchbase as the datastore</li>
                  <li>Migration of data from v1 to v2 of the API</li>
                  <li>Built SDKs for the Playlyfe v2 API in C#, Java, Python, Ruby, PHP, Nodejs, Gos</li>
                  <li>Maintained the job server and wrote most of the background jobs</li>
                  <li>Added documentation to most of the REST API and created the Developer Console which was Like Swagger UI</li>
                  <li>Integrated our REST API in Leanosphere's LMS</li>
                  <li>Integrated the REST API in Knolskape's product Aktivlearn LMS</li>
                  <li>Integrated the REST API in Linkstreet's LMS</li>
                  <li>Integrated the REST API in Moodle LMS by creating an admin plugin to add Gamification features</li>
                  <li>Rebuilt the core platform in golang for performance and developement speed</li>
                  <li>Built the GraphQL API for our cutting edge product Catalyst</li>
                  <li>Convinced the boss to create our own scripting language plscript for our rule engine.</li>
                  <li>Build a REST API for our product catalyst for a POC with Vodafone</li>
                  <li>Built the Quiz, Review, Match, Tournament features in Catalyst for a major project with HP</li>
                  <li>Added gamification features to Saudi Matches a popular game tracking app</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  `;
};

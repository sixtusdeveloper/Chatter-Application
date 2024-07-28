// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  // dsn: "https://3fbe2ab602f8927727e06fcdbfda2690@o4507387492761600.ingest.us.sentry.io/4507387498790912",
  dsn:  "https://4391a38277240d09b1fca3bfad6c2399@o4507387492761600.ingest.us.sentry.io/4507677002235904",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  // Uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: process.env.NODE_ENV === 'development',
  
});

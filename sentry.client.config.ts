// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  // dsn: "https://3fbe2ab602f8927727e06fcdbfda2690@o4507387492761600.ingest.us.sentry.io/4507387498790912",
  dsn:  "https://4391a38277240d09b1fca3bfad6c2399@o4507387492761600.ingest.us.sentry.io/4507677002235904",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  replaysOnErrorSampleRate: 1.0,

  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // You can remove this option if you're not planning to use the Sentry Session Replay feature:
  integrations: [
    Sentry.replayIntegration({
      // Additional Replay configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
    }),
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "dark",
      isNameRequired: true,
      isEmailRequired: true,
    }),
    // Sentry.feedbackIntegration({
    //   // Additional SDK configuration goes in here, for exmaple
    //   colorScheme: "dark",
    // }),
  ],
});

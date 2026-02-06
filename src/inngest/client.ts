import { Inngest } from "inngest";
import { sentryMiddleware } from "@inngest/middleware-sentry";

// npx --ignore-scripts=false inngest-cli@1.15.3 dev

// Create a client to send and receive events
export const inngest = new Inngest({
  id: "polaries",
  middleware: [sentryMiddleware()],
});

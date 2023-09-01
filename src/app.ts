import e from "express";
import { Request, Response, NextFunction } from "express";
import { checkAPI } from "./middleware";
import router from "./routes";
import axios from "axios";
import { logSlackAlert } from "./utils/slack";

const app = e();

app.use(e.json());
app.use(e.urlencoded({ extended: true }));
app.use("/", checkAPI);

const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL as string;

// Custom error handler middleware
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err); // Log the error to the console

  logSlackAlert({
    error: err,
    webhookUrl: slackWebhookUrl,
    username: "IITM-BOT-MAIN",
  });
  // Respond to the client with a generic error message
  res.status(500).json({ error: "Internal Server Error" });
});
app.use("/wa-service/api/", router);

export default app;

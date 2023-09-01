import axios from "axios";

interface SlackAlert {
  error: Error;
  username: string;
  webhookUrl: string;
}

/**
 * Slack logging utility for alerts/errors/exceptions
 *
 * Channel Names:
 * - ama-alerts [Production]
 * - ama-alerts-dev [Development/Staging]
 */
export const logSlackAlert = ({ error, username, webhookUrl }: SlackAlert) => {
  const { name, message, stack } = error;
  const errText = `Error!\nName: ${name}\n Message: ${message}\n Stack: ${stack}`;
  const channel = `eliza-errors${
    process.env.NODE_ENV === "production" ? "" : "-dev"
  }`;
  axios
    .post(webhookUrl, {
      text: `\`\`\`${errText}\`\`\``,
      channel,
      username,
    })
    .catch((slackErr) => {
      // Log the Slack error if the notification fails
      console.error("Error sending Slack notification", slackErr);
    });
};

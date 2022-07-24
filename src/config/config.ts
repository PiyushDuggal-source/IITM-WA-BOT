import * as env from "env-var";
const secretVariables = {
  WA_BOT_ID: env.get("WA_BOT_ID").required().asString(),
  BOT_NAME: env.get("BOT_NAME").required().asString(),
};
export default secretVariables;

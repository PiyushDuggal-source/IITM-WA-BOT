//
// type Log = {
//   msg: string;
//   type: Types;
//   error: boolean;
// };
//
// export const log = ({ msg, type, error }: Log) => {
//   let today = new Date();
//   let formattedDateTime =
//     "[" +
//     today.getFullYear() +
//     "-" +
//     (today.getMonth() + 1) +
//     "-" +
//     today.getDate() +
//     " " +
//     today.getHours() +
//     ":" +
//     today.getMinutes() +
//     ":" +
//     today.getSeconds() +
//     "] ";
//
//   if (!error) {
//     console.log(formattedDateTime + ` [${type}] ` + msg + "\n");
//     // log_file.write(formattedDateTime+'INFO: '+msg+'\n');
//   } else {
//     console.error(formattedDateTime + ` [${type}] ` + msg + "\n");
//     // log_file.write(formattedDateTime+'ERROR: '+msg+'\n');
//   }
// };

import { execSync } from "child_process";
import { createLogger, format, config, transports } from "winston";


const _paperTrailHost = process.env.PAPERTRAIL_HOST;
const _paperTrailPort = process.env.PAPERTRAIL_PORT;

const myFormat = format.printf(
  ({ level, message, label, timestamp }) =>
    `time-${timestamp} [${label}] ${level}: ${message}`
);

const logFileName = `./logs/wa-${Date.now()}.log`;
const binaryFolderPath = "./bin";
let binaryFileName = ``;

const fileTransport = new transports.File({ filename: logFileName });
const consoleTransport = new transports.Console();

switch (process.platform) {
  case "darwin":
    binaryFileName = "remote_syslog_darwin";
    break;

  case "linux":
    binaryFileName = "remote_syslog_linux";
    break;

  default:
    binaryFileName = "remote_syslog_linux";
}

const logger = createLogger({
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    myFormat
  ),
  levels: config.syslog.levels,
  transports: [fileTransport, consoleTransport],
});

const info = (string:string, label:any) => {
  logger.info(string, {
    label,
  });
};

// cmd: remote_syslog -d host -p port logfile.log
try {
  const killEarlierSysCmd = `pkill [r]emote_syslog`;
  const sysLogConnectCmd = `${binaryFolderPath}/${binaryFileName} -d ${_paperTrailHost} -p ${_paperTrailPort} ${logFileName}`;

  try {
    execSync(killEarlierSysCmd);
  } catch (err) {
    console.log("No earlier remote syslog process found", err);
  }
  execSync(sysLogConnectCmd);
} catch (err) {
  logger.error(
    "Someting went wrong while executing remote syslog command",
    err
  );
}

logger.info(
  `Whats app bot rerun & logging initiated; logging at ${logFileName}`,
  {
    label: "Bot Initialize",
  }
);

export default logger;

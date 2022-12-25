type Types =
  | "ERROR"
  | "INFO"
  | "WARNING"
  | "GROUP_JOIN"
  | "GROUP_LEFT"
  | "DISCONNECTED"
  | "CONNECTED";

type Log = {
  msg: string;
  type: Types;
  error: boolean;
};

export const log = ({ msg, type, error }: Log) => {
  let today = new Date();
  let formattedDateTime =
    "[" +
    today.getFullYear() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    today.getDate() +
    " " +
    today.getHours() +
    ":" +
    today.getMinutes() +
    ":" +
    today.getSeconds() +
    "] ";

  if (!error) {
    console.log(formattedDateTime + ` [${type}] ` + msg + "\n");
    // log_file.write(formattedDateTime+'INFO: '+msg+'\n');
  } else {
    console.error(formattedDateTime + ` [${type}] ` + msg + "\n");
    // log_file.write(formattedDateTime+'ERROR: '+msg+'\n');
  }
};

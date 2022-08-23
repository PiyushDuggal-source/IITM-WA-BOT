export const log = (msg: string, error: boolean = false) => {
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
    console.log(formattedDateTime + "INFO: " + msg + "\n");
    // log_file.write(formattedDateTime+'INFO: '+msg+'\n');
  } else {
    console.error(formattedDateTime + "ERROR: " + msg + "\n");
    // log_file.write(formattedDateTime+'ERROR: '+msg+'\n');
  }
};

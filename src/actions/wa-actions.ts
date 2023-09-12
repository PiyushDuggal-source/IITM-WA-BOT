import fs from "fs";
import { Response } from "express";
/**
 * Sends the QR code as an HTML page in the response.
 *
 * @param {Response} res - The response object to send the QR code HTML page.
 * @return {void} This function does not return anything.
 */
export const sendQr = (res: Response) => {
  console.log("\nEntering sendQr");
  fs.readFile("qr.txt", (err, last_qr) => {
    if (!err && last_qr) {
      const page = `
                        <html>
                            <body>
                                <script type="module">
                                </script>
                                <div id="qrcode"></div>
                                <script type="module">
                                    import QrCreator from "https://cdn.jsdelivr.net/npm/qr-creator/dist/qr-creator.es6.min.js";
                                    let container = document.getElementById("qrcode");
                                    QrCreator.render({
                                        text: "${last_qr}",
                                        radius: 0.5, // 0.0 to 0.5
                                        ecLevel: "H", // L, M, Q, H
                                        fill: "#536DFE", // foreground color
                                        background: null, // color or null for transparent
                                        size: 256, // in pixels
                                    }, container);
                                </script>
                            </body>
                        </html>
                    `;
      res.send(page);
    } else {
      console.log("Error reading qr.txt file.", err);
    }
  });
  console.log("Leaving sendQr\n");
};

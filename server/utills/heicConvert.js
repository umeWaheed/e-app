const { promisify } = require("util");
const fs = require("fs");
const convert = require("heic-convert");

(async (file) => {
  const inputBuffer = await promisify(fs.readFile)(`/${file}`);
  const outputBuffer = await convert({
    buffer: inputBuffer,
    format: "JPEG",
    quality: 1,
  });

  await promisify(fs.writeFile)("./result.jpg", outputBuffer);
})();

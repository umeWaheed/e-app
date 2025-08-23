const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { promisify } = require("util");
const fs = require("fs");
const convert = require("heic-convert");

async function uploadMainImage(req, res) {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ message: "Nema otpremljenih fajlova" });
  }

  // Get file from a request
  const uploadedFile = req.files.uploadedFile;
  const newFileName = uploadedFile.name;
  try {
    if (uploadedFile.name.endsWith("heic")) {
      const inputBuffer = uploadedFile.data;
      const outputBuffer = await convert({
        buffer: inputBuffer,
        format: "JPEG",
        quality: 1,
      });
      newFileName = uploadedFile.name.replace(/\.heic$/i, ".jpeg");
    }

    //const outputPath = path.join(__dirname, "../../public", newFileName);

    //await writeFile(outputPath, outputBuffer);

    uploadedFile.mv("../public/" + newFileName, (err) => {
      if (err) {
        return res.status(500).send(err);
      }
    });

    res.status(200).json({
      message: "Fajl je uspešno otpremljen",
      file: newFileName,
    });
  } catch (err) {
    console.error("Greška pri konverziji:", err);
    res.status(500).json({ message: "Greška pri obradi slike" });
  }
}

module.exports = {
  uploadMainImage,
};

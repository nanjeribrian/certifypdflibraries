const pdfshift = require("pdfshift")("YOUR_API_KEY_HERE");
const fs = require("fs");

pdfshift
  .convert("https://www.example.com")
  .then(function (binary_file) {
    fs.writeFile("result.pdf", binary_file, "binary", function (err) {
      if (err) {
        console.error("Error writing the PDF file:", err);
      } else {
        console.log("PDF file successfully created!");
      }
    });
  })
  .catch(function ({ message, code, response, errors = null }) {
    console.error("PDF generation failed:", message);
    console.log("Response:", response);
  });

const Tesseract= require('tesseract.js');
const fs = require("fs");
const image = fs.readFileSync("p.jpg");
Tesseract.recognize(
image,
'eng',
{ logger: m => console.log(m) }
).then(({ data: { text } }) => {
console.log(text);
})
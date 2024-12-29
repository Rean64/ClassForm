const fs = require('fs');

const textIn = fs.readFileSync('./txt.txt', 'utf-8')

const textOut = `This is: ${textIn}.\nCreated to leave everything today's ${Date.now()}`;
fs.writeFileSync('./output.txt', textOut)

console.log('File Written');
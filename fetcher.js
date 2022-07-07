const request = require('request')
const fs = require('fs')
const filesize = require("filesize");

request('http://www.example.edu/ ./index.html', (error, response, body) => {
  console.log('error', error);
  console.log('response', response)
  const content = body;
  fs.writeFile('./index.html', content, error => {
    if (error) console.log('error', error)
  })
  const stats = fs.statSync("index.html");
  const fileSizeInBytes = filesize(stats.size, {round: 0})
  console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ./index.html`)
})
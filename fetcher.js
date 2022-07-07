const request = require('request')
const fs = require('fs')
const filesize = require("filesize");
const args = process.argv.slice(2)
request(args[0], (error, response, body) => {
  console.log('error', error);
  // console.log('response', response)
  const content = body;
  fs.writeFile(args[1], content, error => {
    if (error) console.log('error', error)
    const stats = fs.statSync(args[1]);
    const fileSizeInBytes = filesize(stats.size, {round: 0})
    console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ./index.html`)
  })
  // const stats = fs.statSync("./index.html");
  // const fileSizeInBytes = filesize(stats.size, {round: 0})
  // console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ./index.html`)
})
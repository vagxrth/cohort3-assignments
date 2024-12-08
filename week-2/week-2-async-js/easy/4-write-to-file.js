const fs = require("fs");

const file = "file.txt"
const content = "\nI am a 100xDevs Developer"

fs.writeFile('file.txt', content, { flag: 'a+' }, (err) => {
    if (err) {
        console.error("Error writing to the file")
    } else {
        console.log('Successfuly written to the file!')
    }
})
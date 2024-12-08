const fs = require("fs");

const file = "file.txt"

fs.readFile(file, 'utf-8', (err, data) => {
    console.log(data);
})
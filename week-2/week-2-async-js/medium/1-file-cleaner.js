const fs = require("fs");

let file = "file.txt"

const read = () => {
    fs.readFile(file, 'utf-8', (err, data) => {
        if (data) {
            const cleanData = data.replace(/\s+/g, ' ');
            fs.writeFile(file, cleanData, (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log("Cleaned File Successfully!")
                }
            })
        } else {
            console.error(err);
        }
    })
}

read();
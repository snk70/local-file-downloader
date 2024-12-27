// const express = require("express");
// const app = express();
// const port = 3000;

// const fileSystem = require("fs");

// app.get("/", (req, res) => {
//   var filePath = __dirname + "/pic.jpg";
//   var stat = fileSystem.statSync(filePath);

//   res.writeHead(200, {
//     "Content-Type": "image/jpeg",
//     "Content-Length": stat.size,
//     "Content-Disposition": "attachment; filename=your_file_name",
//   });

//   var file = fileSystem.readFile(filePath, "binary");

//   res.setHeader("Content-Length", stat.size);
//   res.setHeader("Content-Type", "image/jpeg");
//   res.setHeader("Content-Disposition", "attachment; filename=your_file_name");
//   res.write(file, "binary");
// //   res.end();

// //   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });



const express = require('express');
const app = express();
const path = require('path');
const PORT = 3001;

app.get('/:id', (req, res, next) => {
    const fileName = req.params.id;;
    res.sendFile(fileName, {root: path.join(__dirname)}, (err) => {
        if (err) {
            next(err);
        } else {
            console.log('File Sent:', fileName);
        }
    });
});

app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
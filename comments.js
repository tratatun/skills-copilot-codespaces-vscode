// create web server

console.log('comments.js webserver is running');
// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const fs = require('fs');

// app.use(bodyParser.json());

// app.get('/comments', (req, res) => {
//     fs.readFile('./comments.json', (err, data) => {
//         if (err) {
//             res.status(500).send('Internal Server Error');
//         } else {
//             const comments = JSON.parse(data);
//             res.status(200).send(comments);
//         }
//     });
// });

// app.post('/comments', (req, res) => {
//     fs.readFile('./comments.json', (err, data) => {
//         if (err) {
//             res.status(500).send('Internal Server Error');
//         } else {
//             const comments = JSON.parse(data);
//             const newComment = req.body;
//             comments.push(newComment);
//             fs.writeFile('./comments.json', JSON.stringify(comments), (err) => {
//                 if (err) {
//                     res.status(500).send('Internal Server Error');
//                 } else {
//                     res.status(201).send('Created');
//                 }
//             });
//         }
//     });
// });

// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });
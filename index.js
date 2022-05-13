const cheerio = require('cheerio');
const express = require('express');
const app = express();
const fs = require('fs');
const posts = require('./data/posts.json');

app.use('/', express.static('./frontend/feed'));
app.use('/explore', express.static('./frontend/explore'));
app.use('/test', express.static('./frontend/test'));

app.get('/p/:postId', (req, res) => {
    res.send(createPost(posts[req.params.postId]));
});

app.listen(7272, () => {
    console.log(7272);
});

function createPost(info){ /* :pensive: */
    const content = fs.readFileSync('frontend/post/index.html', 'utf-8').replace('Placeholder Title', info.description)
    .replace('<link rel="stylesheet" href="css/style.css">',
    `
    <style>
        ${fs.readFileSync('frontend/post/css/style.css', 'utf-8')}
    </style>
    `);

    return cheerio.load(content).html();
}
const express = require('express');
const app = express();

app.use('/', express.static('./frontend/feed'));
app.use('/explore', express.static('./frontend/explore'));

app.listen(7272, () => {
    console.log(7272);
});
const express = require('express');
const app = express();
const port = 2626;

app.get('/', (req, res) => {
    res.send('Hello world Howldfsjfs');
});

app.listen(port, () => {
    console.log(`listening from ${port}`);
})
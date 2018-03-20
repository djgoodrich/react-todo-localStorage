var express = require('express');

var app = express();


app.get('/', (req, res) => {
    res.send('Hello World');
})
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`listening on Port ${PORT}`);
});



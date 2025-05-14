const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5500

const file = require('./data.json');

app.use(cors());

app.use(express.json());


app.get('/', (req,res) => {
    console.log('port okay');
    res.send(file);
})

app.listen(port, () => {
    console.log("Server running at port: ", port);
})
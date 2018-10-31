const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/status', (req,res) => {
    res.send({it:"works"})
});

const PORT = 8081 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Listening to the port ${PORT}`);
    
});
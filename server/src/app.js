const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const config = require('../config/config.js');
const router = require('./routes');
const {sequelize} = require('./models');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

router(app);


const PORT = 8088 || process.env.PORT;

sequelize.sync()
    .then(() => {
        app.listen(config.port, () => {
            console.log(`Listening to the port ${PORT}`);
            
        });
        
    })


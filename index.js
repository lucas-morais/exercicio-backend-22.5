const express = require('express');
const pingController = require('./controllers/ping');
const greetingController = require('./controllers/greeting');
const simpsonsController = require('./controllers/simpsons');

const app = express();
app.use(express.json())
app.use('/ping', pingController);
app.use('/greeting', greetingController);
app.use('/simpsons', simpsonsController);


app.listen(3000, () => console.log('App rodando na porta 3000'));
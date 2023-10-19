const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const db = require('./db');
const movieRouter = require('./routes/movie-router');

const app = express();

const PORT = 5000 //parseInt(process.env.PORT);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Welcome to my MERN stack app!')
});

app.use('/api', movieRouter);

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
});

const express = require('express');
// import os/dotenv??

const PORT = 5000 //parseInt(process.env.PORT);

const app = express();

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
});

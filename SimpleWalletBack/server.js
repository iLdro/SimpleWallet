const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const cors = require('cors');
app.use(bodyParser.json());


app.use(cors({
    origin: (origin, callback) => {
      const allowedOrigins = ['http://localhost:5173/'];
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
}));


app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
}
);


app.get
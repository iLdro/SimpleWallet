const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const cors = require('cors');
const db = require('./config/database');
const UserModel = require('./models/userModel');
const userRoutes = require('./routes/userRoutes');
const DataGraph = require('./models/graphModel');

app.use(bodyParser.json());


app.use(cors({
    origin: (origin, callback) => {
      const allowedOrigins = ['http://localhost:5173'];
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

app.use('/users/CreateUser', userRoutes);



app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
}
);

app.post('/SaveGraph', async (req, res) => {
  try {
    console.log('req.body:', req.body)
    const { id, datas } = req.body;
    let graph = await DataGraph.findOne({id});
    if (graph){
      console.log('Graph exists')
      // Ensure datas is an object, not an array
      for (let data of datas) {
        graph.datas.push(data);
      }
      console.log(datas)
    } 
    else {
      console.log('Creating new graph')
      graph = new DataGraph({ 
        id,
        datas
      });
    }
    await graph.save({ w: 'majority' });
    console.log('Graph saved')

    res.status(201).json(datas);
  } 
  catch (error) {
    console.error('Error creating a graph:', error);
    res.status(500).json({ error: 'Error creating a graph' });
  }
});


app.get('/getAllPayment', (req, res) =>{
    res.send('Hello World');
});
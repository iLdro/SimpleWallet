const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const cors = require('cors');
const cookieParser = require('cookie-parser');

const db = require('./config/database');
const UserModel = require('./models/userModel');
const userRoutes = require('./routes/userRoutes');
const DataGraph = require('./models/graphModel');
const testRoutes = require('./routes/testRoutes');
const cors = require('cors');

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
app.use(bodyParser.json());
app.use(cookieParser());


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/users', userRoutes);
app.use('/test', testRoutes);



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



app.get('/getDataGraph', async (req, res) => {
    try {
      const { id } = req.query;
      console.log('Requested ID:', id);
      const graph = await DataGraph.findOne({ id });
      if (graph) {
        console.log('Graph found!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        console.log(graph);
        res.status(200).json(graph);
      } else {
        console.log('Graph not found');
        res.status(404).json({ error: 'Graph not found' });
      }
    } catch (error) {
      console.error('Error getting a graph data:', error);
      res.status(500).json({ error: 'Error getting a graph data' });
  }    
});


app.post('/clearData/:id', async (req, res) => {
  try {
    const { id } = req.params;
    let graph = await DataGraph.findOne({ id });
    if (graph) {
      graph.datas = [];
      await graph.save();
      res.status(200).json({ message: 'Data cleared successfully' });
    } else {
      res.status(404).json({ error: 'Graph not found' });
    }
  } catch (error) {
    console.error('Error clearing data:', error);
    res.status(500).json({ error: 'Error clearing data' });
  }
});

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const UserModel = require('../models/userModel');
const DataGraph = require('../models/graphModel');
const { verifyToken, generateToken } = require('../utils/jwt');

// router.all('*', verifyToken);

router.post('/SaveGraph', async (req, res) => {
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
  
  
  
router.get('/getDataGraph', async (req, res) => {
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


router.post('/clearData/:id', async (req, res) => {
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

module.exports = router;
const express = require('express');
const { createUrl, fetchMarvelAPI } = require('../utils/marvelAPI');

const router = express.Router();

router.get('/', async (req, res) => {
    const urlString = 'https://gateway.marvel.com/v1/public/characters';
    const url = createUrl(urlString);
    const params = Object.keys(req.query);
    params.forEach((param) => {
      if (req.query[param] !== '') {
        url.searchParams.set(param, req.query[param]);
      }
    });
  
    try {
      
      const characters = await fetchMarvelAPI(url); 
      res.send(characters);
    } catch (e) {
      res.status(500).send();
    }
});

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isNaN(id)) {
    const urlString = `https://gateway.marvel.com:443/v1/public/characters/${id}`;
    const url = createUrl(urlString);
    

    try {
      const characters = await fetchMarvelAPI(url);
      res.send(characters);
    } catch (e) {
      res.status(500).send();
    }
  } else {
    res.status(500).send({ error: 'Please provide an id!' });
  }
});


router.get('/:id/comics', async (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isNaN(id)) {
    
    const urlString = `https://gateway.marvel.com:443/v1/public/characters/${id}/comics`;
    const url = createUrl(urlString);
    

    try {
      const characters = await fetchMarvelAPI(url);
      res.send(characters);
    } catch (e) {
      res.status(500).send();
    }
  } else {
    res.status(500).send({ error: 'Please provide an id!' });
  }
});

  
  module.exports = router;
const express = require('express');
const router = express.Router();
let Axios = require('axios');
const { API_KEY } = require('../ApiKey');

router.get('/breweries', function (req, res) {
  Axios.get(
    `http://api.brewerydb.com/v2/breweries/?withLocations=Y&key=${API_KEY}`
  )
    .then((response) => {
      res.json(response.data.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json(err);
    });
}),
  router.get('/brewery/:id', function (req, res) {
    const id = req.params.id;
    Axios.get(
      `http://api.brewerydb.com/v2/brewery/${id}/beers/?withBreweries=Y&key=${API_KEY}`
    )
      .then((response) => {
        res.json(response.data.data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500);
        res.json(err);
      });
  });

router.get('/beer/:id', function (req, res) {
  const id = req.params.id;
  Axios.get(
    `http://api.brewerydb.com/v2/beer/${id}/?withIngredients=Y&key=${API_KEY}`
  )
    .then((response) => {
      res.json(response.data.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json(err);
    });
});

module.exports = router;

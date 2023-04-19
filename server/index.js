'use strict';

const express = require('express');
const morgan = require('morgan');
const { getAllPlanets } = require("./handlers/getAllPlanets");
const { getPlanet } = require("./handlers/getPlanet");
const { getUser } = require("./handlers/getUser");
const { deleteUser } = require("./handlers/deleteUser");
const { patchUser } = require("./handlers/patchUser");
const { postUser } = require('./handlers/postUser');

const PORT = 8000;

express()
  .use(function(req, res, next) {
    res.header(
      'Access-Control-Allow-Methods',
      'OPTIONS, HEAD, GET, PUT, POST, DELETE'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('./server/assets'))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use('/', express.static(__dirname + '/'))

  // REST endpoints?
  .get('/planets',getAllPlanets)
  .get('/:id', getPlanet)
  .get('/user/:id', getUser)
  .delete('/:id', deleteUser)
  .post('/user', postUser)
  .patch('/user', patchUser)

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
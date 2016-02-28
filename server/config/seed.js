/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Game = require('../api/game/game.model');

Game.find({}).remove(function() {
  Game.create({
    name : 'Halo 5',
    platform : 'Xbox One',
    genre: 'Shooter'
  },{
    name : 'Fallout 4',
    platform : 'PlayStation 4',
    genre: 'Role-Playing'
  },{
    name : 'Super Smash Bros.',
    platform : 'Wii U',
    genre: 'Fighting'
  },{
    name : 'Pokemon X',
    platform : '3DS',
    genre: 'Role-Playing'
  },{
    name : 'Halo 4',
    platform : 'Xbox 360',
    genre: 'Shooter'
  });
});

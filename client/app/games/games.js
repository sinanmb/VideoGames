'use strict';

angular.module('videoGamesApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('games', {
        url: '/games',
        templateUrl: 'app/games/games.html',
        controller: 'GamesCtrl'
      });
  });
'use strict';

angular.module('videoGamesApp')
  .controller('GamesCtrl', function ($scope, $http) {

    $http.get('/api/games')
      .success (function (data) {
      $scope.games = data;
      console.log(data);
    })
      .error (function(error) {
      alert('Error! Something went wrong');
    });

    $scope.addNewGame = function() {
      $http.post('/api/games', $scope.newGame)
        .success(function () {
          $scope.games.push($scope.newGame);
          $scope.newGame = {};
        })
        .error (function (err) {
        alert('Error! Something went wrong');
      })
    }
  });

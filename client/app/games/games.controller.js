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
    };

    $scope.deleteGame = function (index) {
      $http.delete('/api/games/' + $scope.games[index]._id)
        .success(function (data) {
        $scope.games.splice(index, 1);
      })
        .error(function (error) {
        alert('Error! Something went wrong');
      })
    };

    $scope.toggleEdit = function (index) {
      $scope.games[index].edit = !$scope.games[index].edit;
    };

    $scope.saveGame = function(index) {
      $http.put('/api/games/' + $scope.games[index]._id, $scope.games[index])
        .success(function (){
        $scope.games[index].edit = false;
      })
        .error (function (error) {
        alert('Error! Something went wrong');
      });
    }
  });

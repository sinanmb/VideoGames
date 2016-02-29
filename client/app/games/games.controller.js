'use strict';

angular.module('videoGamesApp')
  .controller('GamesCtrl', function ($scope, $http) {

    $scope.filter = 'none';

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
        .success(function (data) {

          $scope.newGame._id = data._id;
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
    };

    $scope.resetGames = function(){
      $scope.games = $scope.originalGames;
      $scope.filter = 'none';
    };

    $scope.filterByGenre = function(genre){
      $scope.resetGames();
      $scope.games = $scope.games.filter(function(game){
        return game.genre === genre;
      });
      $scope.filter = 'Genre: ' + genre;
    };

    $scope.filterByPlatform = function(platform){
      $scope.resetGames();
      $scope.games = $scope.games.filter(function(game){
        return game.platform === platform;
      });
      $scope.filter = 'Platform: ' + platform;
    };

  });

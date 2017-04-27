angular.module('pokeFightClub')
  .service('pokeService', function($http) {

    this.getPokemon = function() {
      return $http({
        method: 'GET',
        url: 'http://pokeapi.co/api/v2/pokemon/'
      });
    }

  });

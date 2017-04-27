angular.module('arrayApp')
  .controller('arrayController', function($scope, mainService) {

    $scope.data = mainService.getData();
  });

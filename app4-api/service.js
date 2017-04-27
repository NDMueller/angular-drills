angular.module('apiApp')
.service('apiService',function($http){
this.getData=function(){
  return $http({
    method: 'GET',
    url: "http://smurfs.devmounta.in/smurfs/"
  });
};
});

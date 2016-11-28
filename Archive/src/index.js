var app = angular.module('trades', []);
app.controller('tradeController', function($scope, $http) {
  //$scope.test = 'test';
  $http({
    method: 'GET',
    url: '/getData'
  }).then(function successCallback(response) {
    console.log(response.data);
  }, function errorCallback(response) {
    console.log(response);
  });
});

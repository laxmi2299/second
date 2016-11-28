/// <reference path="angular.min.js" />

var app = angular.module("Demo", ["ngRoute"])
                 .config(function ($routeProvider) {
                     $routeProvider
                      .when("/home", {
                          templateUrl: "./Templates/home.html",
                          controller:"homeController"
                      })
                     .when("/courses", {
                         templateUrl: "Templates/courses.html",
                         controller: "coursesController"
                     })
                     .when("/student", {
                         templateUrl: "Templates/student.html",
                         controller: "studentController"
                     })
                 })
                 .controller("homeController", function ($scope, $http) {
                     $scope.message = "Home Page";
                     $http({
                       smethod: 'GET',
                       url: '/getSuccess1'
                     }).then(function successCallback(response) {
                       console.log(response.data);
                       var transmission = response.data.TransmissionAck;
                       $scope.status = transmission.EchoedTransmissionHeader.TransmissionHeader.SenderHostName;
                       alert("Data Fetched from Server Successfully");
                     }, function errorCallback(response) {
                       console.log(response);
                     });
                 })
                 .controller("coursesController", function ($scope, $http) {
                     $scope.courses = ["C#", "Java","VB.NET","SQL server","ASP.NET"];
                     $http({
                       method: 'GET',
                       url: '/getSuccess2'
                     }).then(function successCallback(response) {
                       console.log(response.data);
                       alert("Data Fetched from Server Successfully");
                     }, function errorCallback(response) {
                       console.log(response);
                     });
                 })
                 .controller("studentController", function ($scope, $http) {

                     alert("Test: Data Fetched from Server Successfully");
                     $http.get('http://localhost:3001/').success(function (response) {                         
                         console.log("response");
                         console.log(response);
                         $scope.students = response.student;
                         console.log("st:"+$scope.students);
                     })
                     
                    //  $http.get("getSuccess3")
                    //  .then(function (response) {
                    //      console.log(response.data);

                    //      alert("Data Fetched from Server Successfully");

                    //      //$scope.students = response.data.students;
                    //  });

                 })

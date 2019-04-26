var App = angular.module("App", ["ngRoute", "ngAnimate"]);

//configuration for the app before it starts
App.config([
  "$routeProvider",
  "$locationProvider",
  function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider
      .when("/home", { templateUrl: "components/home.html" })
      .when("/signup", { templateUrl: "components/signup.html" })
      .when("/signin", { templateUrl: "components/signin.html" })
      .when("/task", {
        templateUrl: "components/taskview.html",
        controller: "TaskController"
      })
      .otherwise({ redirectTo: "/home" });
  }
]);

//Task view Controller
App.controller("TaskController", [
  "$scope",
  function($scope) {
    $scope.tasks = [
      { name: "Wash Your Plate", before: new Date() },
      { name: "Wash Your Mate", before: new Date() },
      { name: "Punch Your Face", before: new Date() }
    ];

    //add task
    $scope.addtask = function() {
      var addnew = {
        name: $scope.newtask.task,
        before: new Date()
      };
      $scope.tasks.push(addnew);
      $scope.newtask.task = "";
    };
  }
]);

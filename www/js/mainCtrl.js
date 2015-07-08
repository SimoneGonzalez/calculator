angular.module('starter', [])
  .controller('mainCtrl', function($scope) {
    $scope.message="hello world";
    $scope.display=0;

    $scope.updateDisplay = function(btn) {
      $scope.display = btn;
    }
    $scope.square = function() {

    }
    $scope.sin = function() {

    }

    $scope.cos = function() {

    }
    $scope.tan = function() {

    }
    $scope.sqrt = function() {

    }
    $scope.percent = function() {

    }
    $scope.add = function() {

    }

    $scope.mult = function() {

    }
    $scope.divide = function() {

    }
    $scope.subtract = function() {

    }
    $scope.clear = function() {
      $scope.display = 0;
    }
    $scope.equal = function() {

    }

  });

angular.module('starter', [])
  .controller('mainCtrl', function($scope) {
    $scope.message="hello world";
    $scope.display='0';
    $scope.memory;

    $scope.updateDisplay = function(number) {
      $scope.display += number;
    }
    $scope.square = function() {
    }
    $scope.sin = function() {
      $scope.display = Math.sin($scope.display);
    }

    $scope.cos = function() {
      $scope.display = Math.cos($scope.display);

    }
    $scope.tan = function() {
      $scope.display = Math.tan($scope.display);

    }
    $scope.sqroot = function() {
      $scope.display = Math.sqrt($scope.display);
    }
    // $scope.operation = function(sign) {
    //       if(sign == '/') {}
    //         else if() {}
    //           else if() {

    //           }
    //           else if() {}
    //             else {

    //             };


    // }

    $scope.clear = function() {
      $scope.display = 0;
    }

    $scope.equal = function() {

    }

  });

angular.module("myApp").service("productsSrvc", function($http) {
  var baseUrl = "https://practiceapi.devmountain.com/products";

  this.getShoeData = function() {
    return $http({
      method: "GET",
      url: baseUrl + "?category=shoes"
    });
  };

  this.getSockData = function() {
    return $http({
      method: "GET",
      url: baseUrl + "?category=socks"
    });
  };
});

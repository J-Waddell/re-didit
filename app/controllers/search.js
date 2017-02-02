app.controller('SearchCtrl', function($scope, $http, $location) {
    console.log('SearchCtrl')
})

// searchbar function
app.config(['$mdThemingProvider', function($mdThemingProvider) {
    $mdThemingProvider.theme('input')
      .primaryPalette('blue-grey')
      .accentPalette('pink')
      .warnPalette('red')
      .backgroundPalette('grey');
  }
]);
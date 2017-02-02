app.controller('SearchCtrl', function($scope, $http, homeFactory) {
    console.log('SearchCtrl')
    homeFactory.getList()
    .then(function(fbDataObj) {
        console.log(fbDataObj)
        $scope.fbDataList = fbDataObj
})
})

    // $scope.ShowSearch = function() {
    //     let obj2 = {
    //         search: $scope.search
    //     }
    // }

// searchbar function
app.config(['$mdThemingProvider', function($mdThemingProvider) {
    $mdThemingProvider.theme('input')
      .primaryPalette('blue-grey')
      .accentPalette('pink')
      .warnPalette('red')
      .backgroundPalette('grey');
  }
])
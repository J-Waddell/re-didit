app.controller('SearchCtrl', function($scope, $http, homeFactory) {
    console.log('SearchCtrl')
    homeFactory.getList()
    .then(function(fbDataObj) {
        console.log(fbDataObj)
        $scope.fbDataList = fbDataObj
    })
})



app.controller('HomeCtrl', function ($scope, $http, authFactory, homeFactory) {
    console.log('HomeCtrl')
    homeFactory.getList()
    .then(function(fbDataObj) {
        console.log(fbDataObj)
        $scope.fbDataList = fbDataObj
})


$scope.Showme = function() {
    let obj = {
        avatar: $scope.avatarUrl,
        title: $scope.title,
        subHead: $scope.subHead,
        cardImage: $scope.cardImage,
        headLine: $scope.headLine,
        description: $scope.description,
        uid: authFactory.getUserId()
    }
    console.log(obj)
    $http.post('https://re-didit.firebaseio.com/pin/.json', JSON.stringify(obj))
}
})

// app factory
app.factory('homeFactory', function($http) {
    return {
        getList : () => {
            return $http.get('https://re-didit.firebaseio.com/pin/.json')
            .then(function(httpResObj) {
                return httpResObj.data
            })
            .then(function(fbDataObj) {
                return fbDataObj;
            })
        }
    }
})
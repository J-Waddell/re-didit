app.controller('HomeCtrl', function ($scope, $http, authFactory) {
console.log('HomeCtrl')
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
            return $http
            .get('https://re-didit.firebaseio.com')
            .then(function(data) {
                console.log(data)
            })
        }
    }
})
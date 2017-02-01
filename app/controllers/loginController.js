app.controller('LoginCtrl', function ($scope, $location, $route, authFactory) {

// sign in controller
    $scope.login = () => {
        console.log('working?')
        authFactory.login($scope.email, $scope.password)
      .then((response) => {
        console.log(response)
        $location.url('/home')
      })
    }
  })


// sign in factory
.factory('authFactory', ($q) => {
    return {
      login (email, pass) {
        return $q.resolve(firebase.auth().signInWithEmailAndPassword(email, pass))
      },

      getUserId () {
        return firebase.auth().currentUser.uid
      }
    }
  })
// log out button clear data and re-route
app.controller('LogoutController',function($location, $scope){
    $window.localStorage.clear();
    $location.path('/');
});
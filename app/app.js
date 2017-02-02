console.log('Ay sugga')

const app = angular.module('re-diditApp', ['ngRoute', 'ngMaterial'])

    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD8cy9sR3jGmOFjiW54942podboOlj9Og0",
    authDomain: "re-didit.firebaseapp.com",
    databaseURL: "https://re-didit.firebaseio.com",
    storageBucket: "re-didit.appspot.com",
    messagingSenderId: "78197944126"
  };
  firebase.initializeApp(config);

const checkForAuth = {
      checkForAuth ($location) {
        const authReady = firebase.auth().onAuthStateChanged(user => {
          authReady()
          if (!user) {
            $location.url('/')
          }
        })
      }
    }

app.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('')
    // $mdIconProvider.fontset('md', 'material-icons')
    $routeProvider
        .when('/', {
            controller: 'LoginCtrl',
            templateUrl: 'partials/login.html'
        })
        .when('/home', {
            controller: 'HomeCtrl',
            templateUrl: 'partials/home.html',
        })
        .when('/search', {
            controller: 'SearchCtrl',
            templateUrl: 'partials/search.html'
        })
        .otherwise({redirectTo: '/'})
})
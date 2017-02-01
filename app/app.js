console.log('Ay sugga')

const app = angular.module('re-diditApp', ['ngRoute', 'ngMaterial'])

app.config(($routeProvider, $locationProvider) => {
    $locationProvider.hashPrefix('')
    $routeProvider
        .when('/', {
            controller: 'HomeCtrl',
            templateUrl: 'partials/home.html',
        })
})
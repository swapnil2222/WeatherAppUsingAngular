
angular.module('myModule', ['google.places'])

                // Setup a basic controller with a scope variable 'place'
                .controller('MainCtrl', function ($scope) {
                    $scope.place = null;
                });
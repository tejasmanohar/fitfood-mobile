angular.module('starter.controllers', [])

.controller('ExploreCtrl', function($scope) {
})

.controller('HistoryCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('SettingsCtrl', function($scope) {
});

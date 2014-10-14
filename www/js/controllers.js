angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Sounds) {
    $scope.sounds = Sounds.all();
})

.controller('DashDetailCtrl', function($scope, $stateParams, Sounds) {
    $scope.sound = Sounds.get($stateParams.soundId);
})

.controller('FriendsCtrl', function($scope, Friends) {
    $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
    $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});

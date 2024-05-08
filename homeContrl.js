angular.module('app').controller('homeCtrl', [
  '$scope',
  'Friends',
  function ($scope, Friends) {
    $scope.title = 'Home'
    Friends.get().then(function (data) {
      $scope.friends = data
    })
    $scope.items = [
      'Home',
      'Projects',
      'Contact',
      'site1',
      'site2',
      'site3',
      'site4',
      'site5'
    ]
    $scope.selectedValue = 'Home'

    $scope.save = function () {
      $http.post('/api/friends', Friends)
    }
  }
])

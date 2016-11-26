(function(){
  var app = angular.module("app",[]);
  app.controller("MainCtrl", ["$scope", function($scope){
    $scope.categories = [
        {"id": 0, "name": "Development"},
        {"id": 1, "name": "Design"},
        {"id": 2, "name": "Exercise"},
        {"id": 3, "name": "Humor"}
    ];

    $scope.bookmarks = [
        {"id": 0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development" },
        {"id": 1, "title": "Egghead.io", "url": "http://angularjs.org", "category": "Development" },
        {"id": 2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design" },
        {"id": 3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design" },
        {"id": 4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise" },
        {"id": 5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise" },
        {"id": 6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor" },
        {"id": 7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor" },
        {"id": 8, "title": "Dump", "url": "http://dump.com", "category": "Humor" }
    ];

    $scope.currentCategory = null;

    function isCurrentCategory(category) {
      return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
    }

    function setCurrentCategory(category) {
      $scope.currentCategory = category;
    }

    $scope.isCurrentCategory = isCurrentCategory;
    $scope.setCurrentCategory = setCurrentCategory;

    $scope.inCreateMode = false;
    $scope.inEditMode = false;

    function startCreating(){
      $scope.inCreateMode = true;
      $scope.inEditMode = false;
    }

    function startEditing(){
      $scope.inCreateMode = false;
      $scope.inEditMode = true;
    }

    function cancelCreate(){
      $scope.inCreateMode = false;
    }

    function cancelEdit(){
      $scope.inEditMode = false;
    }

    function shouldShowCreating(){
      return ($scope.currentCategory !== null) && !($scope.inEditMode);
    }

    function shouldShowEditing(){
      return !($scope.inCreateMode) && ($scope.inEditMode);
    }

    $scope.startCreating = startCreating;
    $scope.startEditing = startEditing;
    $scope.cancelCreate = cancelCreate;
    $scope.cancelEdit = cancelEdit;
    $scope.shouldShowCreating = shouldShowCreating;
    $scope.shouldShowEditing = shouldShowEditing;
  }]);
})();

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
      cancelCreate();
      cancelEdit();
    }

    $scope.isCurrentCategory = isCurrentCategory;
    $scope.setCurrentCategory = setCurrentCategory;

    $scope.inCreateMode = false;
    $scope.inEditMode = false;

    function startCreating(){
      $scope.inCreateMode = true;
      $scope.inEditMode = false;
      resetForm();
    }

    function startEditing(){
      $scope.inCreateMode = false;
      $scope.inEditMode = true;
    }

    function cancelCreate(){
      $scope.inCreateMode = false;
    }

    function cancelEdit(){
      $scope.editingBookmark = null;
      $scope.inEditMode = false;
    }

    function shouldShowCreating(){
      return ($scope.currentCategory !== null) && !($scope.inEditMode);
    }

    function shouldShowEditing(){
      return !($scope.inCreateMode) && ($scope.inEditMode);
    }

    // ------------------------------------------------------------------------------------------------------------------
    // CRUD
    // ------------------------------------------------------------------------------------------------------------------


    function resetForm(){
      $scope.newBookmark = {
        title: "",
        url: "",
        category: $scope.currentCategory
      }
    }

    function createBookmark(bookmark){
      bookmark.id = $scope.bookmarks.length;
      $scope.bookmarks.push(bookmark);
      resetForm();
    }

    $scope.editingBookmark = null;

    function setEditBookmark(bookmark){
      $scope.editingBookmark = angular.copy(bookmark);
    }

    function updateBookmark(bookmark){
      var index = _.findIndex($scope.bookmarks, function(b){
        return b.id === bookmark.id;
      });
      $scope.bookmarks[index] = bookmark;
      cancelEdit();
    }

    function bookmarkEditActive(bookmarkId){
      return $scope.editingBookmark !== null && $scope.editingBookmark.id === bookmarkId;
    }
    // ------------------------------------------------------------------------------------------------------------------
    // Revealing to scope
    // ------------------------------------------------------------------------------------------------------------------
    $scope.startCreating = startCreating;
    $scope.startEditing = startEditing;
    $scope.cancelCreate = cancelCreate;
    $scope.cancelEdit = cancelEdit;
    $scope.shouldShowCreating = shouldShowCreating;
    $scope.shouldShowEditing = shouldShowEditing;
    $scope.createBookmark = createBookmark;
    $scope.setEditBookmark = setEditBookmark;
    $scope.updateBookmark = updateBookmark;
    $scope.bookmarkEditActive = bookmarkEditActive;
  }]);
})();

app.controller('InstructorController', function($scope, $routeParams){
  $scope.instructor = instructors[$routeParams.id];
  console.log($scope.instructor);
  $scope.instructors = instructors;

  $scope.hoveredInstructor = function(instructor){
    $scope.instructor = instructor;
  };

  $scope.clearHoveredInstructor = function(){
      $scope.instructor = false;
  };

  $scope.selectInstructor = function(instructor){
    $scope.selectedInstructor = instructor;
  }

  $scope.clearSelectedInstructor = function(){
    $scope.selectedInstructor = false;
  };

  $scope.scrollToBottom = function(){
    console.log("function fired");
    $location.hash('two');
    $anchorScroll();
  };
});
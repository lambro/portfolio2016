app.controller('StudentController', function($scope, $routeParams, $location, $anchorScroll){
  $scope.student = students[$routeParams.id]
  $scope.students = students;

  $scope.hoveredStudent = function(student){
    $scope.student = student;
  };

  $scope.clearHoveredStudent = function(){
      $scope.student = false;
  };

  $scope.selectStudent = function(student){
    console.log(student);
    $scope.selectedStudent = student;
  };

  $scope.clearSelectedStudent = function(){
    $scope.selectedStudent = false;
  };

  $scope.scrollToBottom = function(){
    console.log("function fired");
    $location.hash('two');
    $anchorScroll();
  };
});
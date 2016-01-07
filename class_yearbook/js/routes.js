app.config(function($routeProvider, $locationProvider){
  console.log($routeProvider);
  $routeProvider.when('/', {
    controller: 'YearbookController',
    templateUrl: './#/templates/display.html'
  });

  $routeProvider.when('/student/:id', {
    controller: 'StudentController',
    templateUrl: './#/templates/student.html'
  });

  $routeProvider.when('/students', {
    controller: 'StudentController',
    templateUrl: './#/templates/students.html'
  });

  $routeProvider.when('/instructors', {
    controller: 'InstructorController',
    templateUrl: './#/templates/instructors.html'
  });

  $routeProvider.when('/instructor/:id', {
    controller: 'InstructorController',
    templateUrl: './#/templates/instructor.html'
  });

  $routeProvider.otherwise({
    redirectTo: './#/'
  });

  // $locationProvider.html5Mode(true);
});
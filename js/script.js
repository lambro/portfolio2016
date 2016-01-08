app.directive('introduction', function(){
  return{
    restrict: 'E',
    templateUrl: '/templates/introduction.html'
  };
});

app.directive('about', function(){
  return{
    restrict: 'E',
    templateUrl: '/templates/about.html'
  };
});

app.directive('skills', function(){
  return{
    restrict: 'E',
    templateUrl: '/templates/skills.html'
  };
});

app.directive('experience', function(){
  return{
    restrict: 'E',
    templateUrl: '/templates/experience.html'
  };
});

app.directive('education', function(){
  return{
    restrict: 'E',
    templateUrl: '/templates/education.html'
  };
});

app.directive('projects', function(){
  return{
    restrict: 'E',
    templateUrl: '/templates/education.html'
  };
});

app.directive('contactform', function(){
  return{
    restrict: 'E',
    templateUrl: '/templates/contactform.html'
  };
});

app.directive('prettyp', function(){
  return function(scope, element, attrs) {
    $("[rel^='prettyPhoto']").prettyPhoto({deeplinking: false, social_tools: false, default_width: 600,
      default_height: 500,});
  }
})
var insta = function(){
  var userFeed = new Instafeed({
      get: 'user',
      userId: '179689416',
      accessToken: '179689416.467ede5.d849175aafaf40b3a130577a4379a702',
      sortBy: 'most-liked',
      limit: '12',
      template: '<a href="{{link}}"><img class="instagram-pic col-md-1 col-xs-3 img-responsive" src="{{image}}" /></a>'
  });
  userFeed.run();
}

insta();

app.directive('introduction', function(){
  return{
    restrict: 'E',
    templateUrl: '/templates/introduction.html',
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





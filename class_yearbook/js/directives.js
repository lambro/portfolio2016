app.directive('studentTabs', function(){
  return{
    restrict: 'A',
    replace: true,
    templateUrl: '/templates/student-tabs.html',
    controller: function(){
      this.tab = 1;
      this.selectTab = function(currentTab){
        this.tab = currentTab;
      };
      this.isSelected = function(currentTab){
        return this.tab === currentTab;
      };
    },
    controllerAs: 'tabs'
  };
});

app.directive('instructorTabs', function(){
  return{
    restrict: 'A',
    replace: true,
    templateUrl: '/templates/instructor-tabs.html',
    controller: function(){
      this.tab = 1;
      this.selectTab = function(currentTab){
        this.tab = currentTab;
      };
      this.isSelected = function(currentTab){
        return this.tab === currentTab;
      };
    },
    controllerAs: 'tabs'
  };
});


app.directive('headingText', function(){
  return{
    restrict: 'E',
    replace: true,
    templateUrl: '/templates/heading-text.html'
  };
});

app.directive('alternateHeadingText', function(){
  return{
    restrict: 'E',
    replace: true,
    templateUrl: '/templates/alternate-heading-text.html'
  };
});
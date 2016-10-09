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

 // var TxtType = function(el, toRotate, period) {
 //        this.toRotate = toRotate;
 //        this.el = el;
 //        this.loopNum = 0;
 //        this.period = parseInt(period, 10) || 2000;
 //        this.txt = '';
 //        this.tick();
 //        this.isDeleting = false;
 //    };

 //    TxtType.prototype.tick = function() {
 //        var i = this.loopNum % this.toRotate.length;
 //        var fullTxt = this.toRotate[i];

 //        if (this.isDeleting) {
 //        this.txt = fullTxt.substring(0, this.txt.length - 1);
 //        } else {
 //        this.txt = fullTxt.substring(0, this.txt.length + 1);
 //        }

 //        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

 //        var that = this;
 //        var delta = 200 - Math.random() * 100;

 //        if (this.isDeleting) { delta /= 2; }

 //        if (!this.isDeleting && this.txt === fullTxt) {
 //        delta = this.period;
 //        this.isDeleting = true;
 //        } else if (this.isDeleting && this.txt === '') {
 //        this.isDeleting = false;
 //        this.loopNum++;
 //        delta = 500;
 //        }

 //        setTimeout(function() {
 //        that.tick();
 //        }, delta);
 //    };

 //    window.onload = function() {
 //        var elements = document.getElementsByClassName('typewrite');
 //        for (var i=0; i<elements.length; i++) {
 //            var toRotate = elements[i].getAttribute('data-type');
 //            var period = elements[i].getAttribute('data-period');
 //            if (toRotate) {
 //              new TxtType(elements[i], JSON.parse(toRotate), period);
 //            }
 //        }
 //        // INJECT CSS
 //        var css = document.createElement("style");
 //        css.type = "text/css";
 //        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
 //        document.body.appendChild(css);
 //    };



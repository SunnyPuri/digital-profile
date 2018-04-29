app.directive('blur', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
        element.on('load', function() {
            element.removeClass("blurImage");
            console.log("loaded");
        });
    }
  };
});


app.directive('home', function() {
  return {
      restrict: 'AE',
      replace: 'true',
      templateUrl: 'template/home.html'
  };
});


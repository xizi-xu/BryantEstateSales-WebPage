photoApp.directive('photoInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/singlePhoto.html' 
  }; 
});
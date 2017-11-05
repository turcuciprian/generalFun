var app = angular.module('testMod',[]);

app.controller('testCtrl', ['$templateCache', '$compile', '$rootScope', '$document','$http', function($templateCache, $compile, $rootScope, $document,$http){
  var tThis = this;
  tThis.tScope = null;
  tThis.testButt = function(){
    console.log('yes it works');

    $http.get('testTemplate.html', {
    cache: true
}).then(function(resp){
    $templateCache.put('testTemplate.html',resp.data);
    var templatex = $templateCache.get('testTemplate.html');
    console.log(templatex);
    if(tThis.tScope==null){
      var scope = $rootScope.$new();
      tThis.tScope = scope;
    }
    var templateElement = $compile(templatex)(tThis.tScope);
    tThis.tScope._templateElement = templateElement;
    angular.element(document.querySelector('body')).append(templateElement);
});


    // var body = $document.find('body');
    // body.append(templatex);

  }
  this.removeButt = function(){
// console.log(tThis.tScope);
tThis.tScope._templateElement.remove();
  };
}]);

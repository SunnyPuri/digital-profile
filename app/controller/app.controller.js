app.controller('mainController',['$scope','api', function($scope,api){
    
    $scope.connectStatus = false;
    
    api.menu().then(function(response){
        $scope.menuItems = response.data;
    });
    
    $scope.posts = "";
    
    $scope.selectedMenu = "Home";
    api.home().then(function(response){
        $scope.posts = response.data;
    });
    $scope.changeMenu = function(menu){
        $scope.selectedMenu = menu;
        if(menu.toLowerCase() == "experience"){
            api.experience().then(function(response){
                $scope.posts = response.data;
            });
        }else if(menu.toLowerCase() == "projects"){
            api.projects().then(function(response){
                $scope.posts = response.data;
            });
        }else if(menu.toLowerCase() == "achievements"){
            api.achievements().then(function(response){
                $scope.posts = response.data;
            });
        }else if(menu.toLowerCase() == "education"){
            api.education().then(function(response){
                $scope.posts = response.data;
            });
        }else{
            api.home().then(function(response){
                $scope.posts = response.data;
            });
        }
    }
    
    
    $scope.display = '<home ng-repeat="post in posts" ></home>';
    
}]);
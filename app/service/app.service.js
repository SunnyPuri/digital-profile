app.service('api', ['$http',function($http){
    
    var url = window.location.href;
    var arr = url.split("/");
    
    this.menu = function(){
        var result = arr[0] + "//" + arr[2] + "/" + arr[3] + "/app/data/menu.json";
        return $http.get(result);
    }
    
    this.home = function(){
        var result = arr[0] + "//" + arr[2] + "/" + arr[3] + "/app/data/home.json";
        return $http.get(result);        
    }
    
    this.experience = function(){
        var result = arr[0] + "//" + arr[2] + "/" + arr[3] + "/app/data/experience.json";
        return $http.get(result);  
    }
    
    
    this.projects = function(){
        var result = arr[0] + "//" + arr[2] + "/" + arr[3] + "/app/data/projects.json";
        return $http.get(result);  
    }
    
    this.achievements = function(){
        var result = arr[0] + "//" + arr[2] + "/" + arr[3] + "/app/data/achievements.json";
        return $http.get(result);     
    }
    
    this.education = function(){
        var result = arr[0] + "//" + arr[2] + "/" + arr[3] + "/app/data/education.json";
        return $http.get(result); 
    }
        
    
}]);
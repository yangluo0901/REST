
   angular.module("todo", []).controller("todoController", function ($scope) {
       $scope.todoList = [];
       $scope.add = function(){
           $scope.todoList.push({todoText: $scope.input, done: false});
           $scope.input= '';
           console.log(`before removing `);
           console.log($scope.todoList);
       }

       $scope.remove = function () {
            var oldList = $scope.todoList;
           $scope.todoList = [];
          angular.forEach(oldList, function (x){
               if (!x.done){
                   $scope.todoList.push(x);
               }

           })

       }
       console.log($scope.todoList);
  
    });
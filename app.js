var app = angular.module('app', ['ngTable']);
app.controller('MainCtrl', ['$scope', '$http','ngTableParams','$templateCache' ,
    function ($scope, $http, ngTableParams,$templateCache) {
    var tableData = [];
    //Table configuration
    $scope.tableParams = new ngTableParams({
        page: 1,
        count: 8
    },{
     //   counts:[]
        total:tableData.length,
        //Returns the data for rendering
        getData : function($defer,params){
            console.log("Get Data Called", params);
            $http.get('data.json').then(function(response) {
                tableData = response.data.person;
                $defer.resolve(tableData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                params.total(tableData.length);
            });
        }
    });
      var data = [{name: "Moroni", age: 50},
                {name: "Tiancum", age: 43},
                {name: "Jacob", age: 27},
                {name: "Nephi", age: 29},
                {name: "Enos", age: 34},
                {name: "Tiancum", age: 43},
                {name: "Jacob", age: 27},
                {name: "Nephi", age: 29},
                {name: "Enos", age: 34},
                {name: "Tiancum", age: 43},
                {name: "Jacob", age: 27},
                {name: "Nephi", age: 29},
                {name: "Enos", age: 34},
                {name: "Tiancum", age: 43},
                {name: "Jacob", age: 27},
                {name: "Nephi", age: 29},
                {name: "Moroni", age: 50},
                {name: "Tiancum", age: 43},
                {name: "Jacob", age: 27},
                {name: "Nephi", age: 29},
                {name: "Enos", age: 34},
                {name: "Tiancum", age: 43},
                {name: "Jacob", age: 27},
                {name: "Nephi", age: 29},
                {name: "Enos", age: 34},
                {name: "Tiancum", age: 43},
                {name: "Jacob", age: 27},
                {name: "Nephi", age: 29},
                {name: "Enos", age: 34},
                {name: "Tiancum", age: 43},
                {name: "Jacob", age: 27},
                {name: "Nephi", age: 29},
                {name: "Enos", age: 34}];

    $scope.tableParams1 = new ngTableParams({
        page: 1,            // show first page
        count: 10           // count per page
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
    });
    
    $scope.countPerPage = 10;
   
}]);
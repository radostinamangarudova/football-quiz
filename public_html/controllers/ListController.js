(function(){
    angular
            .module("footballFacts")
            .controller("ListController", ListController);
    
    ListController.$inject = ['$scope', 'quizMetrics', 'DataService'];
    
    function ListController($scope, quizMetrics, DataService){
    
        $scope.quizMetrics = quizMetrics;
        
        $scope.footballData = DataService.footballData;
        $scope.activePlayer = {};
        $scope.changeActivePlayer = changeActivePlayer;
        $scope.activateQuiz = activateQuiz;
        
        $scope.search = "";
        
        function changeActivePlayer(index){
            $scope.activePlayer = index;
        }
        
        function activateQuiz(){
             quizMetrics.changeState("quiz", true);
        }
        
    }
    
})();

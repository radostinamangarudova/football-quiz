(function(){
    angular
            .module("footballFacts")
            .controller("ResultsController", ResultsController);
    
            ResultsController.$inject = ['$scope','quizMetrics', 'DataService']
    
    function ResultsController($scope, quizMetrics, DataService){
        
        $scope.quizMetrics = quizMetrics;
        $scope.dataService = DataService;
        $scope.activeQuestion = 0;
        $scope.getAnswerClass = getAnswerClass;
        $scope.getActiveQuestion = getActiveQuestion;
        $scope.calculatePerc = calculatePerc;
        $scope.reset = reset;
        
        function getAnswerClass(index){
            if(index === quizMetrics.correctAnswers[$scope.activeQuestion]){
                return "bg-success";
            }
            else if(index === DataService.quizQuestions[$scope.activeQuestion].selected){
                return "bg-danger";
            }
        }
        
        function getActiveQuestion(index){
            $scope.activeQuestion = index;
        }
        
        function calculatePerc(){
            return quizMetrics.numCorrect / DataService.quizQuestions.length * 100;
        }
        
        function reset(){
            quizMetrics.changeState("results", false);
            quizMetrics.numCorrect = 0;
            
            for(var i=0; i<DataService.quizQuestions.length;i++){
                var data = DataService.quizQuestions[i];
                
                data.selected =  null;
                data.correct = null;
            }
        }
    }
})();
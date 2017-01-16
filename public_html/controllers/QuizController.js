(function(){
    angular
            .module("footballFacts")
            .controller("QuizController", QuizController);
    
            QuizController.$inject = ['$scope', 'quizMetrics', 'DataService'];
    
            function QuizController($scope, quizMetrics, DataService){
                
                $scope.quizMetrics = quizMetrics;
                $scope.footballData = DataService.footballData;
                $scope.dataService = DataService;
                $scope.questionAnswered = questionAnswered;
                $scope.setActiveQuestion = setActiveQuestion;
                $scope.selectAnswer = selectAnswer;
                $scope.finaliseAnswers = finaliseAnswers;
                $scope.activeQuestion = 0;
                $scope.error = false;
                $scope.finalise = false;    
                
                var numQuestionsAnswered = 0;
                
                function setActiveQuestion(index){
                        
                    if(index === undefined){
                    var breakOut = false;
                    var quizLength = DataService.quizQuestions.length -1;
                    
                        while(!breakOut){
                            $scope.activeQuestion = $scope.activeQuestion < quizLength?++$scope.activeQuestion:0;
                            
                            if($scope.activeQuestion === 0){
                                $scope.error = true;
                            }

                            if(DataService.quizQuestions[$scope.activeQuestion].selected === null){
                                breakOut = true;
                            }
                        }
                    }
                    else{
                        $scope.activeQuestion = index;
                    }
                }
                
                function questionAnswered(){
                    
                    var quizLength = DataService.quizQuestions.length;
                    
                    if(DataService.quizQuestions[$scope.activeQuestion].selected !== null){
                        numQuestionsAnswered++;
                        if(numQuestionsAnswered >= quizLength){
                            //finalise quiz
                            for (var i=0; i<quizLength; i++){
                                if(DataService.quizQuestions[i].selected === null){
                                    setActiveQuestion(i);
                                    return;
                                }
                            }
                            
                            $scope.error = false;
                            $scope.finalise = true;
                            return;
                        }
                    }
                    
                    $scope.setActiveQuestion();
                }
                
                function selectAnswer(index){
                    DataService.quizQuestions[$scope.activeQuestion].selected=index;
                    DataService.quizQuestions[$scope.active]
                }
                
                function finaliseAnswers(){
                    $scope.finalise = false;
                    numQuestionsAnswered = 0;
                    $scope.activeQuestion = 0;
                    quizMetrics.markQuiz();
                    quizMetrics.changeState("quiz", false);
                    quizMetrics.changeState("results", true);
                }        
            }
            
})();
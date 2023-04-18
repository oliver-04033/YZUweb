$(function(){
    let currentQuiz = null;
    $("#startbutton").on("click", function(){
        //console.log("Hello");
        if(currentQuiz == null){
            currentQuiz = 0;
            $("#question").text(questions[0].question);
            $("#options").empty();
            questions[0].answers.forEach(function(element, index, array){
                $("#options").append(
                    `<input name ='options' type = 'radio' value = '$(index)'><label>${element[0]}</label><br><br>`
                );
            });
            $("#startbutton").attr("value", "下一題");
        }else{
            $.each($(":radio"),function(i, val){
                if(val.checked){
                    if(isNaN(questions[currentQuiz].answers[i][1])){//ABCD
                        let finalResult = questions[currentQuiz].answers[i][1];
                        $("#question").text(finalAnswers[finalResult][0]);
                        $("#options").empty();
                        $("#options").append(`${finalAnswers[finalResult][1]}<br><br>`);
                        currentQuiz = null;
                        $("#startbutton").attr("value", "重新開始");
                    }else{
                        currentQuiz = questions[currentQuiz].answers[i][1]-1;
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                        questions[currentQuiz].answers.forEach(function(element, index, array){
                            $("#options").append(
                                `<input name ='options' type = 'radio' value = '$(index)'><label>${element[0]}</label><br><br>`
                            );
                        });
                    }
                    return false;
                }
            });
        }
    })
});
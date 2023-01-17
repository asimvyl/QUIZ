const Question_Text = document.querySelector(".quiz-text");
const Option_Container = document.querySelector(".quiz-option");

let Question_counter = 0;

let Available_Question = [];
let Available_Option = [];


function Set_Available_Question(){
    const total_question = quiz.length;
    for(i=0;i < total_question ; i++){
        Available_Question.push(quiz[i])

    }
}

function Get_New_Question(){
    const Question_Index = Available_Question[Math.floor(Math.random () * Available_Question.length)]
    Current_question =  Question_Index
    Question_Text.innerHTML = Current_question.question;

    const index1 =Available_Question.indexOf(Question_Index);
    Available_Question.splice(index1,1);

    const OptionLen = Current_question.option.length
    for (i=0; i < OptionLen ; i++){
        Available_Question.push(i)
    }

    for (i=0; i<OptionLen; i++){
        const options = document.createElement("div");
        options.innerHTML = Current_question.option[i];
        options.id = i;
        options.className = "option_html";
        quiz-option.appendChild(options);
    }

    Question_counter ++;
}

function next(){
    if (Question_counter === quiz.length){
        console.log("quiz over");
    }
    else{
        Get_New_Question();
    }
}


window.onload = function() {

    Set_Available_Question();
    Get_New_Question();
    
}
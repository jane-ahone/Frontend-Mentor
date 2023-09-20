var answers = document.querySelectorAll(".answer");
var questions = document.querySelectorAll(".question");
var arrow = document.querySelectorAll(".drop-down");
var click = false;
for(let i=0; i<answers.length;i++){
    answers[i].classList.add("hidden");
    arrow[i].addEventListener("click",function(){
        if(click === false){
        arrow[i].classList.add("rotate-arrow");
        questions[i].classList.add("bold-text");
        answers[i].classList.add("visible");
        click = true;
        }
        else{
        arrow[i].classList.remove("rotate-arrow");
        questions[i].classList.remove("bold-text");
        answers[i].classList.remove("visible");
        click = false;
        }



    })
}

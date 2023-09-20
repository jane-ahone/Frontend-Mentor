var firstPage = document.querySelector(".container1");
var secondPage = document.querySelector(".container2");
var count;
var numbers = document.querySelectorAll(".review-numbers>p");

for(let i=0; i<5; i++){
    numbers[i].addEventListener("click",function() {
        numbers[i].classList.add("clicked-number");
        count = i+1;
});
}
let submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click",function(){
    firstPage.classList.add("hidden");
        secondPage.classList.add("visible");
        document.querySelector(".text-button").innerHTML = `You selected ${count} out of 5`;

});
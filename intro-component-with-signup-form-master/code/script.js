
function validateEmpty(event){ 
    var element = event.target
    var IdName = element.id;
    var property = document.getElementById(IdName).value.trim();
    var errorMessage = document.querySelector("."+IdName)
    if(property==""){
        errorMessage.classList.remove("hidden");
        errorMessage.innerHTML = "Field cannot be empty";
    }
    else{
        errorMessage.classList.add("hidden");
    }
}

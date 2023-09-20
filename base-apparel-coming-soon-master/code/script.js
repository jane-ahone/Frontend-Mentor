
var pattern = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

// Get a reference to the content div
const contentDiv = document.getElementById("validation-container");

// Create a <p> element
var paragraph = document.createElement("p");
paragraph.textContent = "You have entered a valid email";

// Create an <img> element
const image = document.createElement("img");
image.src="../images/icon-error.svg"

// Append the paragraph and image to the content div

function validateEmail(){
contentDiv.innerHTML="";
var validate = document.getElementById("email").value;
if(pattern.test(validate)){
    contentDiv.appendChild(paragraph);
    return true;
}
else{ 
    contentDiv.appendChild(image);
    paragraph.textContent = "You have entered an invalid email";
    contentDiv.appendChild(paragraph);
    return false
}
}
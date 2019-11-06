//generate password
function generate(){
//set password length/complexity
let complexity = document.getElementById("slider").value;

//passible password values
let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_="

let password = "";

//create for loop to choose password characters
for(var i= 0; i <= complexity; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
}

//add password to textbox/display area
document.getElementById("display").value = password;

//add password to previously generate passwords section
document.getElementById("lastNums").innerHTML +=password + "<br /r>";
}

//set default length of 30
document.getElementById("length").innerHTML = "length : 30";

//function to set length based on slider position
document.getElementById("slider").oninput = function() {
    if (document.getElementById("slider").value > 0) {
        document.getElementById("length").innerHTML = "length: "+ document.getElementById("slider").value;
    }
    else {
        document.getElementById("length").innerHTML = "length: 1"
    }
}
//function to copy password to clipboard
function copyPassword(){
   document.getElementById("display").select();
   document.execCommand("copy");
   alert ("Password copied to clipboard!");

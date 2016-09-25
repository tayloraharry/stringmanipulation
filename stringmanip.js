var stringEntered;
var submit = document.getElementById("submit");
var reverseValue = document.getElementById("reverseValue");
var palindromeValue = document.getElementById("palindromeValue");
var alphaValue = document.getElementById("alphaValue");
var revStringEntered = "";
var alphaArray = [];
var counter = 0;
var asciiValue;

// This functions checks for chars ONLY
function validateInput(og) {
    for(var i = 0; i < og.length; i++) {
        asciiValue = og.charCodeAt(i); // gets the ascii value of each char
        // if the value is NOT an uppercase or lowercase number return false
        if(!(asciiValue >= 97 && asciiValue <= 122 || asciiValue >= 65 && asciiValue <= 90)) {
            return false;
        }
    }
    return true;
}

function reversal(userString) {
    for(var i = (userString.length - 1); i >= 0; i--) {
        revStringEntered += userString[i];
    }
    palindrome(revStringEntered, userString);
    return revStringEntered;
}

function palindrome(revStringEntered, stringEntered) {
    if (revStringEntered === stringEntered) {
      palindromeValue.value = "yes";
    }
    else {
      palindromeValue.value = "no";
    }
    alphaSort(stringEntered);
}

function alphaSort(stringEntered) {
    var stringArray = stringEntered.split("");
    alphaValue.value = stringArray.sort().join();
}

function runProgram() {
    stringEntered = document.getElementById("stringEntered").value;
    if(validateInput(stringEntered)) {
        reverseValue.value = reversal(stringEntered);
    } else {
        alert("Sorry you entered an illegal char");
    }
}

// checks for enter pressed
document.getElementById('stringEntered').onclick = function(e){
  e.stopPropogation;
document.getElementById('stringEntered').addEventListener("keydown", function(e) {
    e.stopPropogation;
    if(e.keyCode === 13) {
        validateInput();
    }
});
}

//Title: hochdoerfer-palindrome.js
//Author: Kyle Hochdoerfer
//Date: 5/29/23
//Description: JavaScript for hochdoerfer-palindrome.html

//Declare a function for obtaining the current date
function getTodaysDate(){
    //Declare a variable containing the current date and return it
    const date = new Date().toLocaleDateString('en-US');
    return date;
}

//Declare a function for getting the length of a string
function getLength(str){
    //Return the length of the provided parameter
    return str.length;
}

//Declare a function to reverse a string
function reverse(str){
    //Split the parameter string into an array, reverse it, and join it back into a string
    let string = str.split("");
    string = string.reverse();
    string = string.join("");

    //Return the reversed string
    return string;
}

//Declare a function to determine if the parameter "str" is a palindrome
function isPalindrome(str){
    //Declare a variable "palindrome" containing the boolean value "false"
    let palindrome = false;

    //If "str" in reverse is equal to "str"
    if (reverse(str) == str){
        //Set "palindrome" equal to true
        palindrome = true;
    }

    //Return the true/false value of "palindrome"
    return palindrome;
}

//Register an onclick event to check to see if the inputted phrase is a palindrome
document.getElementById("btnCheckPhrase").onclick = function() {
    //Declare a variable to hold the text input from the HTML file
    let txtPhrase = document.getElementById('txtPhrase').value.toLowerCase();

    //Declare variables set to the results divs from the HTML files
    let assignResultsHeader = document.getElementById('assign-results-header');
    let assignResults = document.getElementById('assign-results');

    //Declare variables to hold today's date, the length of the phrase, and the reversed phrase
    let today = getTodaysDate();
    let len = getLength(txtPhrase);
    let reversePhrase = reverse(txtPhrase);

    //Declare a variable to hold an HTML header displaying the date and information about the phrase
    let header = "Date: " + today + `<br/>`+ "Original Phrase: " + txtPhrase + `<br/>`+ "Reversed Phrase: " 
        + reversePhrase + `<br/>`+ "Phase Length: " + len;

    //Set the innerHTML of the assignment results header to display the header variable
    assignResultsHeader.innerHTML = header;

    //If txtPhrase is a palindrome:
    if (isPalindrome(txtPhrase)){
        //Display a string in HTML stating that the phrase is a palindrome
        assignResults.innerHTML = txtPhrase + ` <b><u>is</u></b>` + " a palindrome!";
    } else {
        //Otherwise, display a string in HTML stating that the phrase is not a palindrome
        assignResults.innerHTML = txtPhrase + ` <b><u>is not</u></b>` + " a palindrome!";
    }
}
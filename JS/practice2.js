
// Find middle character of the word.
    
// User is going to input a word.Your task is to find the middle character of this word.

// If the word’s length is odd - return the middle character. If word’s length is even - return the middle 2 characters.

// You should validate for empty value and for value with spaces only, in that case show message: “Invalid value”.

// For user input use “prompt” function. For displaying result use “alert” function.

// Examples:
// For user input “test” should return “es”
// For user input “character” should return “a”
// For user input “B” should return “B”
// For user input “” should return “Invalid value”
// For user input “ “ should return “Invalid value”

const word = prompt('Input the word');
// const wordLength = word.length;

if (word === null || word.trim() === '') {
    alert ('Invalid value');
} else {
    const wordLength = word.length;
    if (wordLength % 2 === 0) {
        const firstIndex = wordLength / 2 - 1;
        const lastIndex = wordLength / 2 + 1;

        alert(word.slice(firstIndex, lastIndex));
        
        // console.log(word.slice(wordLength / 2 - 1, wordLength / 2 + 1));

    } else {
        const firstIndex = ((wordLength + 1) / 2) - 1;
        const lastIndex = (wordLength + 1) / 2;

        alert(word.slice(firstIndex, lastIndex));
    }
}

// Write the code which verify user rights.
// Step 1. Check login// Ask user for a login 
// use prompt()
// If the input is an empty line or Esc – show “Canceled.” 
// for showing - use alert()// If the input length less than 4 symbols - show “I don't know any users having name length less than 4 symbols”.
// If it’s another string – then show “I don’t know you”.
// If the visitor enters "User" or "Admin", then prompt for a password.// Step 2. Check password:
// For an empty string or cancelled input, show “Canceled.”
// For login “User” correct password is “UserPass”, for “Admin” correct password is “RootPass”.
// In other case, show “Wrong password”.// Step 3. Greets the user appropriately:
// If the current time in hours is more then 5.00 and less then 20: 
// current hours – new Date().getHours()// For “User” show “Good day, dear User!”// For “Admin” show “Good day, dear Admin!”// In other way:
// For “User” show “Good evening, dear User!”
// For “Admin” show “Good evening, dear Admin!
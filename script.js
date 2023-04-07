
// Assignment Code
var numChar;
var choiceArr =[];

var specialCharacter=['!','@','#','$','&','*'];
var lowerAlph= ["a", "b", "c", "d", "e", "f", "g", "h","i", "j", "k", "l", "m", "n","o", "p",
              "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperAlph =['A','B','C','D','E','F','G','H','I','J','K','L',
              'M','N', 'O', 'P','Q','R','S','T','U','V', 'W','X','Y','Z']
var number=['0','1','2','3','4','5','6','7','8','9'];

// asignment code
var generateBtn = document.querySelector("#generate");

  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function writePassword() {
    var correctPrompts = ObtPrompt(); // returns true or false
    var passwordText = document.querySelector("#password");

    if (correctPrompts){
      var newPassword = generatePassword(); //function a
      passwordText .value = newPassword;
      } else{
        passwordText.value= "";
      }
  }
function  generatePassword(){ //function a

  var password ="";
  for (var i=0; i<numChar; i++){
    var randomIndex =Math.floor (Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}


//FUNTION PROMPTS
function ObtPrompt()  {
        choiceArr=[];
     numChar = parseInt (prompt ("Enter the number of characters for your password. Pick a number between 8 and 128 "));
        if (numChar > 128 || numChar < 8){
          alert('Invalid number entered. Please try again.');
          return false;
        }
    //. lowercase
        if(confirm("Do you want lowercase in your password?")){
          choiceArr =choiceArr.concat(lowerAlph) ;
        }
    //uppercase
        if(confirm("Do you want uppercase in your password?")){
          choiceArr =choiceArr.concat(upperAlph) ;
        }
    // special character
        if(confirm("Do you want special characters in your password?")){
         choiceArr =choiceArr.concat(specialCharacter) ;
        }
    // number
        if(confirm("Do you want numbers in your password?")){
         choiceArr =choiceArr.concat(number) ;
        }
      return true;
    }
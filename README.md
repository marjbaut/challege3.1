# Challenge3
# Challenge3
#This is a pasword generator
This tool will help you to randomlly generate a password for the user after picking a number  greater that 8 and smaller that 128.
It will also ask whether the user wants lower case, uppercase, special characters and / or numbers.
there is a possibily to pt out of lowercase if user does not want it.
(./images/asking-numb-char.png)
This is another code that does similar outputs. the only difference is the while loop.
there is no way the user can get out of the page unless the right answer is enter. 

it starts un line  15: (let me know what you think!)
function ObtPrompt()  {
      choiceArr=[];
      numChar = parseInt (prompt ("Enter the number of characters for your password. Pick a number between 8 and 128 "));
        while (numChar > 128 || numChar < 8){
          //alert('Please enter a valid number:');
          // ObtPrompt();
          numChar = (prompt("Please enter a valid number:"))
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
        if(confirm("Do you want specialCharacter in your password?")){
         choiceArr =choiceArr.concat(specialCharacter) ;
        }
    // number
        if(confirm("Do you want number in your password?")){
         choiceArr =choiceArr.concat(number) ;
        }
      return true;
    }

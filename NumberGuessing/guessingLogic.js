let guesses = document.getElementById("guesses");
let guess = document.getElementById("guess");
let message = document.getElementById("message");
let guessbtn = document.getElementById("guessbtn")

let numberedGuesses = Math.floor(Math.random() * 10 + 2);
guesses.textContent = `${numberedGuesses} GUESSES`;

let number = Math.floor(Math.random() * 100 + 1)

let notGuessed = true;

let guessleft = numberedGuesses;
guessbtn.onclick = function(){

    if(guessleft <= 1){
        message.textContent = `❌OOH YOUR ${numberedGuesses} guesses are out, YOU LOSE👎, the number was ${number}❌`
        guessbtn.disabled = true;
        guessbtn.id = "disabledguessbtn"
    }
       else if(guess.value > 100 || guess.value <= 0){
        guessleft--
        message.textContent = `❌The guess ${guess.value} is INVALID. I REMOVE 1 GUESS AS A PENALTY!!(${guessleft} guesses are left!!)❌`
        
    }
    else{ 
            if(guess.value === ""){
        guessleft--;
        message.textContent = `HMM didn't fill anything out? TOO BAD! You have ${guessleft} guesses left`
    }
    else if(guess.value == number){
        message.textContent = `🎉YOU GOT IT CORRECT, THE NUMBER WAS ${number}🎉`;
        
     }
    else if(guess.value < number){
        guessleft--;
        message.textContent = `OOOH, SORRY BUT ${guess.value} is TOO LOW🥶. You have ${guessleft} guesses left`
    }
    else if(guess.value > number){
        guessleft--;
       message.textContent = `OOOH, SORRY  BUT ${guess.value} is TOO HIGH🥵. You have ${guessleft} guesses left`
    }
   
    }

}

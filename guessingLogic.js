let guesses = document.getElementById("guesses");
let guess = document.getElementById("guess");
let message = document.getElementById("message");
const guessbtn = document.getElementById("guessbtn")
const wins = document.getElementById("wins")
const loses = document.getElementById("loses")
let win_num = Number(localStorage.getItem("wins"))
let lose_num = Number(localStorage.getItem("loses"))
wins.textContent = `Wins: ${win_num}`
loses.textContent = `Loses: ${lose_num}`
const resetbtn = document.getElementById("resetbtn")
resetbtn.disabled = true
resetbtn.id = "disabled"
const guesslist = document.getElementById("guesslist")
const guessbox = document.getElementById("guessbox")


let numberedGuesses = Math.floor(Math.random() * 10 + 2);
guesses.textContent = `${numberedGuesses} GUESSES`;
let number = Math.floor(Math.random() * 100 + 1)


let notGuessed = true;

let guessleft = numberedGuesses;
guessbtn.onclick = function () {
    
   


              if (guess.value == number) {
                guessleft--
            message.textContent = `🎉YOU GOT IT CORRECT, THE NUMBER WAS ${number}🎉`;
            win_num += 1
            localStorage.setItem("wins", win_num || 0)
            wins.textContent = `Wins: ${win_num}`
            let li = document.createElement("li")
            let message2 = document.createElement("h1")
            let inguess = numberedGuesses - guessleft
            li.textContent = `${guess.value} ✅`
            message2.textContent = `You guessed it in ${inguess} guesses`
            guesslist.append(li)
            guessbox.append(message2)
            guessbtn.disabled = true;
            resetbtn.disabled = false;
            guessbtn.id = "disabled"
            resetbtn.id = "resetbtn"
            



        }
    else if (guessleft <= 1) {
        message.textContent = `❌OOH YOUR ${numberedGuesses} guesses are out, YOU LOSE👎, the number was ${number}❌`
        guessbtn.disabled = true;
        resetbtn.disabled = false;
        guessbtn.id = "disabled"
        resetbtn.id = "resetbtn"
        lose_num += 1
        localStorage.setItem("loses", lose_num || 0)
        loses.textContent = `Loses: ${lose_num}`
        let li = document.createElement("li")
        li.textContent = `${guess.value} ❌❌`
        guesslist.append(li)

    }

                else if (guess.value === "") {
            guessleft--;
            message.textContent = `HMM didn't fill anything out? TOO BAD! You have ${guessleft} guesses left`
            let li = document.createElement("li")
            li.textContent = `NOT GUESSED ❓`
            guesslist.append(li)

        }
    else if (guess.value > 100 || guess.value <= 0) {
        guessleft--
        message.textContent = `❌The guess ${guess.value} is INVALID. I REMOVE 1 GUESS AS A PENALTY!!(${guessleft} guesses are left!!)❌`
        localStorage.setItem("wins", win_num || 0)
        let li = document.createElement("li")
        li.textContent = `${guess.value} (INVALID)❌❌❌`
        guesslist.append(li)

    }

    else {


        if (guess.value < number) {
            guessleft--;
            message.textContent = `OOOH, SORRY BUT ${guess.value} is TOO LOW🥶. You have ${guessleft} guesses left`
            let li = document.createElement("li")
            li.textContent = `${guess.value} ❌`
            guesslist.append(li)
        }
        else if (guess.value > number) {
            guessleft--;
            message.textContent = `OOOH, SORRY  BUT ${guess.value} is TOO HIGH🥵. You have ${guessleft} guesses left`
            let li = document.createElement("li")
            li.textContent = `${guess.value} ❌`
            guessbtn.id = "disabled"
            resetbtn.id = "resetbtn"
            guesslist.append(li)
        }

    }

}
resetbtn.addEventListener("click", function () {
    numberedGuesses = Math.floor(Math.random() * 10 + 2);
    guesses.textContent = `${numberedGuesses} GUESSES`;
    notGuessed = true;
    guessleft = numberedGuesses;
    message.textContent = ""
    guess.value = ""
    guessbtn.id = "guessbtn"
    guessbtn.disabled = false
    resetbtn.id = "disabled"
    resetbtn.disabled = true
    guesslist.textContent = ""
    number = Math.floor(Math.random() * 100 + 1)
})
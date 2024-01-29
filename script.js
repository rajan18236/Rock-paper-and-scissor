let useScore = 0;
let compScore = 0;


const head = document.querySelector(".head");
const choices = document.querySelectorAll(".choice");
const userpoint = document.querySelector("#userScore");
const comppoint = document.querySelector("#compScore");
const firstDiv = document.querySelector(".firstchild-container");
const secDiv = document.querySelector(".secondchild-container");
const output = document.querySelector(".output");
const footer = document.querySelector(".footer");

const compChoice = () => {
    const option = ["rock", "paper", "scissors"]
    const idx = Math.floor(Math.random() * 3)

    if (idx === 0) {
        output.innerHTML = ` <div class="choice" id="rock">
<img src="/img/rock.png" alt="err" >
</div>`
    }
    else if (idx === 1) {
        output.innerHTML = `<div class="choice" id="paper">
    <img src="/img/paper.png" alt="err" >
</div>`
    }
    else {
        output.innerHTML = `<div class="choice" id="scissors">
    <img src="/img/scissors.jpeg" alt="err" >
</div>`

    }
    return option[idx]

}
const draw = (compChoice,userChoice) => {

    head.innerHTML = "<h5>Match was Draw!!</h5>"
    head.classList.remove("win")
    head.classList.remove("lose")
    head.classList.add("Draw")
    firstDiv.classList.remove("loser")
    firstDiv.classList.remove("winner")
    secDiv.classList.remove("winner")
    secDiv.classList.remove("loser")
    firstDiv.classList.add("draw")
    secDiv.classList.add("draw")
    footer.innerHTML = `<h5>Draw Match!!\nTry Again</h5>`

}
const winner = (userWon,computer_choice,userChoice) => {
    if (userWon) {
        useScore++;
        userpoint.innerHTML = `<h4>Your score :${useScore}`;
        head.innerHTML = "<h5>You Won!</h5>"
        head.classList.remove("Draw")
        head.classList.remove("lose")
        head.classList.add("win")
        firstDiv.classList.remove("draw")
        firstDiv.classList.remove("loser")
        firstDiv.classList.add("winner")
        secDiv.classList.remove("draw")
        secDiv.classList.remove("winner")
        secDiv.classList.add("loser")
        footer.innerHTML = `<h5>Your "${userChoice}" beats Computer "${computer_choice}"</h5>`
        

    }
    else {
        compScore++;
        comppoint.innerHTML = `<h4>Computer score :${compScore}`;
        head.innerHTML = "<h5>You Lose!</h5>"
        head.classList.remove("Draw")
        head.classList.remove("win")
        head.classList.add("lose")
        firstDiv.classList.remove("draw")
        firstDiv.classList.remove("winner")
        firstDiv.classList.add("loser")
        secDiv.classList.remove("draw")
        secDiv.classList.remove("loser")
        secDiv.classList.add("winner")
        footer.innerHTML = `<h5>Computer "${computer_choice}" beats your "${userChoice}"</h5>`



    }


}

const fight = (userChoice) => {
    let computer_choice = compChoice();
    if (userChoice === computer_choice) {
        draw();

    }

    else {
        userWon = true;
        if (userChoice === "rock") {
            userWon = computer_choice === "paper" ? false : true
        }
        else if (userChoice === "paper") {
            userWon = computer_choice === "scissors" ? false : true
        }
        else {
            userWon = computer_choice === "rock" ? false : true
        }
        winner(userWon, computer_choice, userChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        fight(userChoice);
    })
})
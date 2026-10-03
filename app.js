let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

};

const drawGame = () => {
    msg.innerText = "game draw. play again.";
    msg.style.backgroundcolor = "#081b31";
};

const showWinner = (userWin) => {
     if(userWin){
        userscore++;
        userscorePara.innerText = userscore;
        msg.innerText = "you win!";
        msg.style.backgroundcolor = "green";
    } else {
        compscore++;
        compscorePara.innerText = compscore;
        msg.innerText = "you lose.";
        msg.style.backgroundcolor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    // generate computer choice 
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if(userChoice === compChoice){
        // draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;

        } else if (userChoice === "paper"){
            // rock , scissors
           userWin = compChoice = "scissors" ? false : true;

        } else {
            // rock, paper 
           userWin = compChoice === "rock" ? false : true; 
        }

        showWinner(userWin);

    }

};

choices.forEach((choice)  => {
    choice.addEventListener("click", ()   => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);


    });

});
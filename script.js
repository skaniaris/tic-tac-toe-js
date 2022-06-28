const playerCreator = (name) => {
    const sayName = () => console.log(`Hi ${name}`);
    return {name, sayName};
}

const player1 = playerCreator(document.querySelector("#player1").value);
const player2 = playerCreator(document.querySelector("#player2").value);

const Gameboard = (() => {
    gameBoard = ["", "", "", "", "", "", "", "", ""]
    
    return {
        gameBoard
    }
})();

const DisplayController = (() => {
    let counter = 0; 
    function renderBoard(buttonId = "") {
        displayName();
        roundCounter(counter);
        
        }

    document.getElementById("btn0").addEventListener("click", renderBoard("btn0"));
    document.getElementById("btn1").addEventListener("click", renderBoard("btn1"));
    document.getElementById("btn2").addEventListener("click", renderBoard("btn2"));
    document.getElementById("btn3").addEventListener("click", renderBoard("btn3"));
    document.getElementById("btn4").addEventListener("click", renderBoard("btn4"));
    document.getElementById("btn5").addEventListener("click", renderBoard("btn5"));
    document.getElementById("btn6").addEventListener("click", renderBoard("btn6"));
    document.getElementById("btn7").addEventListener("click", renderBoard("btn7"));
    document.getElementById("btn8").addEventListener("click", renderBoard("btn8"));
        
    function displayName() {
        if(counter === 0) {
            document.querySelector(".message").querySelector("h2").innerHTML = `${player1.name}'s Turn`
            console.log(player1.name);
        } else if (counter%2 === 0) {
            document.querySelector(".message").querySelector("h2").innerHTML = `${player1.name}'s Turn`
        } else if (counter%2 !== 0) {
            document.querySelector(".message").querySelector("h2").innerHTML = `${player2.name}'s Turn`
        }
    }

    function roundCounter(count) {
        if (count < 9) {
            count++;
            console.log(count);
        } 
    }

    function checkGameOver() {

    }
    return {
        renderBoard
    }
})();


document.querySelector(".start").addEventListener("click", DisplayController.renderBoard);
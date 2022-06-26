//     document.getElementById("btn1").addEventListener("click", fillXO("btn1", document.getElementById("btn1").value));
    
//     document.getElementById("btn2").addEventListener("click", fillXO("btn2",document.getElementById("btn2").value));

//     document.getElementById("btn3").addEventListener("click", fillXO("btn3", document.getElementById("bt3").value));
    
//     document.getElementById("btn4").addEventListener("click", fillXO("btn4", document.getElementById("btn4").value));

//     document.getElementById("btn5").addEventListener("click", fillXO("btn5",document.getElementById("btn5").value));

//     document.getElementById("btn6").addEventListener("click", fillXO("btn6",document.getElementById("btn6").value));

//     document.getElementById("btn7").addEventListener("click", fillXO("btn7",document.getElementById("btn7").value));

//     document.getElementById("btn8").addEventListener("click", fillXO("btn8",document.getElementById("btn8").value));

//     document.getElementById("btn9").addEventListener("click", fillXO("btn9",document.getElementById("btn9").value));

//     let startBtn = document.querySelector(".start");
//     startBtn.addEventListener("click", render);
// };

const Gameboard = (function() {
    const board = {
        gameBoard: ["X", "O", "X", "O", "X", "O", "X", "O", "X"]
    }
    
    function render() {
        for (i = 0; i < board.gameBoard.length; i++) {
            if (i === 0) {
                document.getElementById(`btn${i}`).innerHTML = board.gameBoard[i]
            } else if (i%2 === 0) {
                document.getElementById(`btn${i}`).innerHTML = board.gameBoard[i];
            } else if (i%2 !== 0) {
                document.getElementById(`btn${i}`).innerHTML = board.gameBoard[i];
            }
        }
    }
    return {
        render
    }
})();

const DisplayController = (function() {
})();

document.querySelector(".start").addEventListener("click", Gameboard.render); 

const playerCreator = (name) => {
    const sayName = () => console.log(`Hi ${name}`);
    let playerCount = 0;
    return {name, sayName};
}

const player1 = playerCreator(document.querySelector("#player1").value);
const player2 = playerCreator(document.querySelector("#player2").value);

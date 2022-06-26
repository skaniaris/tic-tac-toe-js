// // GAMEBOARD

// const gameBoard = () => {

//     let gameArray = ["x", "O", "X", "O", "X", "O", "X", "O", "X"];
    
    
//     const render = () => {
//         console.log("start");
//     }
    
//     const fillXO = (id, value) => {
//         if (value%2 === 0 ) {
//             document.getElementById(id).innerHTML = "O";
//         } else if (value%2 !== 0) {
//             document.getElementById(id).innerHTML = "X";
//         }
//     }
    
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

// // CONTROLLER controls flow of game 
// const controller = (function() {
    
// })();

// // creating new players 
// const player = (name, letter) => {
//     return {name, letter};
// };

// const player1 = player(document.getElementById("player1").value, document.getElementById("player1Letter").value.toUpperCase());

// const player2 = player(document.getElementById("player2").value, document.getElementById("player2Letter").value.toUpperCase());


const ticTacToe = (function() {
    const gameBoard = {
        gameArray: ["X", "O", "X", "O", "X", "O", "X", "O", "X"]
    }

    const displayController = {

    }
    
})();

function render() {
    for (i = 1; i <= 9; i++) {
        if (document.getElementById(`btn${i}`).value%2 === 0) {
            document.getElementById(`btn${i}`).innerHTML = "O";
        } else if (document.getElementById(`btn${i}`).value%2 !== 0) {
            document.getElementById(`btn${i}`).innerHTML = "X";
        }
    }
}

render();
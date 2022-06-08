const gameBoard = (function() {
    let gameArray = [["X", "O", "X"], ["O", "X", "O"], ["X", "O", "X"]];
    
    const render = () => {
        let board = document.querySelector(".gameBoard");
        for (let i = 0; i <gameArray.length; i++) {
            board.innerHTML += gameArray[i] + "<br/>";
        }
    }
    
    let startBtn = document.querySelector(".start");
    startBtn.addEventListener("click", render);
})();

const controller = (function() {
    
})();

const player = (name, letter) => {
    return {name, letter};
};
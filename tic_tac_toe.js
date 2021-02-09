
function restart(squares) {
    var restartButton = document.querySelector("#restart")
    
    function clearBoard() {
        for (let i = 0; i < squares.length; i++) {
            squares[i].textContent = '';            
        };
    };
    restartButton.addEventListener('click', clearBoard)
};


function changeMarker() {
    if(this.textContent === ''){
        this.textContent = 'X';
    } else if (this.textContent === 'X'){
        this.textContent = 'O';
    } else {
        this.textContent = '';
    };
};


function addEventListeners(squares) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', changeMarker);
    };
};


function main() {
    var squares = document.querySelectorAll("td");
    restart(squares);
    addEventListeners(squares);
};


main()
let gameboard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]


let current_player = "X";
let count = 0;
let isgameover = false;


function playermove(cell) {
    // console.log(cell)
    if(isgameover){
        document.getElementById('playerturn').innerHTML = "Game Over!"
        return
    }

    let row = cell.parentNode.rowIndex;
    let column = cell.cellIndex;

    // console.log(row, column)

    if (gameboard[row][column] == "") {
        gameboard[row][column] = current_player;
        cell.innerHTML = current_player;
        count++;

        if (checkwinner()) {
            document.getElementById("status").innerHTML = `Player "${current_player}" won!`;
            isgameover = true;
        } 
        
        else if(checktie()){
            document.getElementById("status").innerHTML = `Match Tie`;
        }

        else {
            if (current_player == "X") {
            current_player = "O";
        }
        else {
            current_player = "X"
        }
            
    }

        document.getElementById('playerturn').innerHTML = `Turn of "${current_player}"`;
    }
}


function checkwinner() {
    // row
    for (let i = 0; i < 3; i++) {
        if (gameboard[i][0] === current_player
            && gameboard[i][1] === current_player
            && gameboard[i][2] === current_player)
            return true;

        // column
        if (gameboard[0][i] === current_player
            && gameboard[1][i] === current_player
            && gameboard[2][i] === current_player)
            return true;
    }

    //diagonals
    if (gameboard[0][0] === current_player
        && gameboard[1][1] === current_player
        && gameboard[2][2] === current_player)
        return true;

    if (gameboard[0][2] === current_player
        && gameboard[1][1] === current_player
        && gameboard[2][0] === current_player)
        return true;
}


 function checktie(){
    if(count === 9){
        return true
    }
    return false
 }


 function reset(){
    gameboard = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]
    
    
    current_player = "X";
    count = 0;
    
    let cell = document.getElementsByClassName("cell");
    for(let i=0; i<cell.length; i++){
        cell[i].innerHTML = "" ;
    }
    
 }
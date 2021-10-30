var arrayRow0 = ['b', 'b', 'b'];
var arrayRow1 = ['b', 'b', 'b'];
var arrayRow2 = ['b', 'b', 'b'];
var arrayFull = [arrayRow0, arrayRow1, arrayRow2];
var mark = "X";                                 //X goes first
var winFlag = "";


function check(row, column, divId){
    alert(" okay: " + row + "  " + column + "  " + divId);
    var currentMark = arrayFull[row][column];
    
    if(currentMark == 'b'){                 //if it's a blank square, then
        arrayFull[row][column] = mark;
        var element = document.getElementById(divId);
        element.innerHTML = mark;           //show the X or O on screen
              
        if(arrayFull[row][0] == mark){          //check that row
            if(arrayFull[row][1] == mark){
                if(arrayFull[row][2] == mark){
                    winFlag = mark;                    

                    for(var i = 0; i < 3; i++){
                        var numb = 91 + (row * 3) + i;
                            //gets the Id of 1st element of that row
                        var element = document.getElementById(numb);
                        element.style.backgroundColor = "red";
                    }               
                }
            }
        }

        if(arrayFull[0][column] == mark){       //check that column
            if(arrayFull[1][column] == mark){
                if(arrayFull[2][column] == mark){
                    winFlag = mark;

                    for(var i = 0; i < 3; i++){
                        var numb = 91 + column + (i * 3);
                            //gets the Id of 1st element of that column
                        var element = document.getElementById(numb);
                        element.style.backgroundColor = "red";
                    }   
                }
            }
        }

        if(arrayFull[0][0] == mark){            //check 1st diagonal
            if(arrayFull[1][1] == mark){
                if(arrayFull[2][2] == mark){
                    winFlag = mark;
                    var element = document.getElementById(91);
                    element.style.backgroundColor = "orange";
                    var element = document.getElementById(95);
                    element.style.backgroundColor = "orange";
                    var element = document.getElementById(99);
                    element.style.backgroundColor = "orange";
                }
            }
        }

        if(arrayFull[0][2] == mark){            //check 2nd diagonal
            if(arrayFull[1][1] == mark){
                if(arrayFull[2][0] == mark){
                    winFlag = mark;
                    var element = document.getElementById(93);
                    element.style.backgroundColor = "green";
                    var element = document.getElementById(95);
                    element.style.backgroundColor = "green";
                    var element = document.getElementById(97);
                    element.style.backgroundColor = "green";
                }
            }
        }
        
        if(winFlag == ""){                          //game not over?
            if(mark == "X"){
                mark = "O";                         //change players
            }
            else{
                mark = "X";
            }
        }
        else{
            var element = document.getElementById("winner");
            element.innerHTML = `${winFlag} WINS THE GAME!`
        }
    }   
    else{                                           //not a blank square?
        alert(`THIS SQUARE IS ALREADY TAKEN`);
    }    
}

function resetGame(){                       //reset the game
    for(var i = 91; i < 100; i++){
        var element = document.getElementById(i);
        element.innerHTML = "";             //blank the squares
        element.style.backgroundColor = "white";
    }

    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
            arrayFull[i][j] = "b";          //blank internal array
        }
    }

    mark = "X";
    winFlag = "";
    var element = document.getElementById("winner");
    element.innerHTML = "";
}
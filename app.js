let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#restart"); 

resetButton.addEventListener("click", () => {
    resetGame();
})

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
    

]

let turnO = true;


 //boxes clickable 

boxes.forEach((box) =>{
    box.addEventListener("click",  () => {
        console.log("box is click");
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO =true;
        }
        box.disabled = true; 

        
        if(!winner()) {
            drawGame();
         }

    });
});
 
 // Winner check

const winner = () => {
    for(pattern of winPatterns) {
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if(position1 != "" && position2 != "" && position3 != "") {
            if(position1 === position2 && position2 === position3) {
               // console.log(pattern);
                //  console.log(
                //   boxes[pattern[0]].innerText,
                //   boxes[pattern[1]].innerText,
                //   boxes[pattern[2]].innerText
                //  );  


                console.log(" winner");
                alert(`Winner is ${position1}`); 
                boxes[pattern[0]].style.backgroundColor = "green";
                boxes[pattern[1]].style.backgroundColor = "green";
                boxes[pattern[2]].style.backgroundColor = "green";

                disabledAllButton();
               
                return true;
        
            }
        }
    }
    return false;
}

//disable All button func

const disabledAllButton = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

 // reset button func

const resetGame =() => {
    turnO = true;
    enableAllButton();

}
 

// Enable ALL Button fun

const enableAllButton = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.style.backgroundColor = "";
    }
}
 
 // check game draw fun
const drawGame = () => {
    let boxFilled = true;
    boxes.forEach(box => {
        if(box.innerText === "") {
            boxFilled = false;
        }
    });

    if(boxFilled) {
        alert("Game is draw");
       
        disabledAllButton();

    }
}



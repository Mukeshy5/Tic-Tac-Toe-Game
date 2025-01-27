let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode ="light";
modebtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode ="dark";
        // document.querySelector("body").style.backgroundColor ="black";
        body.classList.add("dark");
        body.classList.remove("light");


    }else
    {
        currMode=("light");
        // document.querySelector("body").style.backgroundColor ="white";
        body.classList.add("light");
        body.classList.remove("dark");



    }
        console.log(currMode);

});




let boxes =document.querySelectorAll(".box");
let resetbtn = document.querySelector("#Reset");
let newGamebtn =document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg =document.querySelector("#msg");

let turnO = true;//plyerX,playerO
const winpatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1 ,4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
    
];
const resetGame = ()  => {
        turnO = true;
        enableboxes();
        msgContainer.classList.add("hide");
} 

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        // console.log("box was clicked");
    if(turnO) {//player O
        box.innerText = "O";
        turnO = false;
    } else {//PlayerX
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;

    checkWinner();
    });
});
const disableboxes =() => {
    for (let box of boxes){
        box.disabled = true;
    }
}
const enableboxes =() => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWiner = (Winner) => {
   msg.innerText = `Congratulations, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}
const checkWinner = () => {
    for(pattern of winpatterns) {
    
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner",pos1Val);

                showWiner(pos1Val);
            }
        }

    };
    
};
newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click",resetGame);

// boxes[pattern[0]].innerText,
// boxes[pattern[1]].innerText,
// boxes[pattern[2]].innerText
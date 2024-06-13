let UserS=0;
let compS=0;

const  Userscore=document.querySelector("#Userscore");
const  Compscore=document.querySelector("#Compscore");


//for comp choice
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const CompChoice= () =>{
    let options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
 
};
//for draw game
const Drawgame=()=>{
    console.log("game drawn!!!");
    msg.innerText="Game drawn!!";
}
//show winner
const ShowWinner=(userWin)=>{
if(userWin){
    UserS++;
    Userscore.innerText = UserS;
    console.log("you Win!!");
    msg.innerText="You Win!";
    msg.style.backgroundColor="green";
    
}
else{
    compS++;
    Compscore.innerText = compS;
    console.log("you lose");
    msg.innerText="You Lose!";
    msg.style.backgroundColor="red";
}
}
const playgame=(UserChoice) => {
console.log("user-choice:",UserChoice);
const compChoice= CompChoice();
console.log("comp-choice:",compChoice);
if (UserChoice==CompChoice){
    Drawgame();
}
else{
    let userWin = true;
    if(UserChoice=="rock"){
        userWin = compChoice =="paper" ? false : true;
         
    }else if(UserChoice=="paper"){
        userWin = compChoice =="scissor" ? false : true;

    }else{
        userWin = compChoice =="rock" ? false : true;
    }
    ShowWinner(userWin);

}

};

//for user choice
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",() =>{
    const UserChoice = choice.getAttribute("id")
        playgame(UserChoice);
    });
});
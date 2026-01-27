const max= prompt("Enter the first number:");
const random=Math.floor(Math.random()*max)+1;
let guess=prompt("enter the numberr");
while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;

    }
    if(guess==random){
        console.log("you are corrected");
        break;
    } else {
       guess=prompt("try again you guess was wrong");
    }

}
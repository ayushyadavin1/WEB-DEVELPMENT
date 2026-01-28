function ayush(){
    console.log(" ayush");
};
ayush();
ayush();
ayush();
ayush();

function printname(){
    console.log("ayushyadav");
    console.log("shivam");
};
printname();


function print1to5(){
    for(let i=1;i<=5;i++){
console.log(i);
    };
};
print1to5();


function printisadult() {
    let age=18;
    if(age>=18){
        console.log("you are adult");
    } else{
        console.log("you are not adult");
    }
}
printisadult();


// ceate a funtion that print a poem 
function printpoem(){
    console.log("dolley dolley yess papa .eating sungar no papa");
    console.log("telling lies no papa");
    console.log("open your mouth ha ha ha");
}
printpoem();



//create a function to roll a dice and always display the value of dice bw 1 to 6

function rollDice () {
    let rand=Math.floor(Math.random()*6)+1;
    console.log(rand);

}
rollDice();
// this is used to make a dice which can give from 0 to 6 number 
// in which two math object are used 1=math.floor is helps to remove decimal 
// from a number and another is math.random which is used to generate a random number 
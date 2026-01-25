// let i=1;
// while(i<=5)
// {
//     console.log(i);
//     i++;
// }
//output
// 1
// 2
// 3
// 4
// 5
// Here in the above code we have used a while loop to print the numbers from 1 to 5

//let us paly a game in which there will be a fov and people have to think  is the movie is correct enter or not it the assumed correct ans then display right other display pls try again but user have one choese that to quit the game
const fovmovies="kfg";
let guess=prompt("enter your fov mivies");
while ((guess!= fovmovies) && (guess!="quit")){
    guess=prompt("wrong guess, please try again");
}
if(guess==fovmovies){
    console.log("you guessed it right");
}
//output
// enter your fov mivies:abc
// wrong guess, please try again:kfg
// you guessed it right
// enter your fov mivies:abc
// wrong guess, please try again:quit
// (no output)
// Here in the above code we have used a while loop to allow the user to keep guessing their favorite movie until they either guess correctly or choose to quit the game.


//for using break statement in while loop
let i=1;
while(i<=10){
    console.log(i);
    if(i==5){
        break;
    }
    i++;
}
//output
// 1
// 2
// 3
// 4
// 5
// Here in the above code we have used a while loop to print the numbers from 1 to 10 but we have used a break statement to exit the loop when the value of i is equal to 5.

//loop with array
let fruits=["apple","banana","mango","grapes"];
for(i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
//output
// apple
// banana
// mango
// grapes
// Here in the above code we have used a for loop to iterate through an array of fruits and print each fruit to the console.

//nested loop with nested array
let fruit=[
    ["apple", "banana"],
    ["mango", "grapes"]
];
for(i=0;i<fruit.length;i++){
    for(j=0;j<fruit[i].length;j++){
        console.log(fruit[i][j]);
    }
}
//output
// apple
// banana
// mango
// grapes
// Here in the above code we have used nested for loops to iterate through a nested array of fruits and print each fruit to the console.


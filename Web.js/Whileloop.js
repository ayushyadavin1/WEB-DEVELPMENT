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
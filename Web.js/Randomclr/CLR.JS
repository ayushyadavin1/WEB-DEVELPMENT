let btn=document.querySelector("button");
btn.addEventListener("click",function (){
    console.log("generate a random color");
    let h3=document.querySelector("h3");
    let randomcolor=getRandomColor();
    h3.innertext=randomcolor;
    console.log("color updated");

    let div=document.querySelector("div");
    div.style.backgroundcolor=randomcolor;
});

function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
   
    let color=`rgb(${red},${blue},${green})`;
    return color;

}
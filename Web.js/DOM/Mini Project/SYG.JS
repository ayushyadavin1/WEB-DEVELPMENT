let gameseq=[];
let userseq=[];

let btn=["yellow","blue","green","purpel"];

let start=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if (started == false){
        console.log("Game is started");
        started=true;


        levelup();
    } 
});
function btnflash(){
    btnflash.classlist.add("flash");
    setTimeout( function (){
        btnflash.classlist.remove("flash");
    },1000);
}



function levelup(){
    level++;
    h2.innerText=`level ${level}`;

    letrandIdx=Math.floor(Math.random()*3);
    let randomColor=btn(randidx);
    let randombtn=document.querySelector('.${randomColor}');
    console.log("randidx");
    console.log("randcolor");
        console.log("randbtn");
        btnflash(randombtn);//
//random cle will be flashed//
}
   /*function btnpress{
    let btn=this;
   }
   let allbtn=document.querySelectorAll(",(btnpress);")*/
h1 = document.querySelector("h1");

/*setTimeout(()=> {
    h1.style.color="red";
},1000);
setTimeout(()=> {
    h1.style.color="yellow";
},2000);
setTimeout(()=> {
    h1.style.color="green";
},3000);*/
//as we see for one work we write multiple lines of code thats why is is call callback hell problem to solve this type of problem 

function changeColor(color, delay) {
    setTimeout(()=> {
        h1.style.color=color;
    }, delay);
}
changeColor("RED",1000);
changeColor("yellow",2000);
changeColor("green",3000);
//in call back problem we use promises and async,await to solve this type of plem becuse this type of problem acurrs when we have to do multiple work oone after one 
//bassically promises is a object which is used to handle asynchronous operation and it has three state pending,fullfilled,rejected and async await is a syntactic sugar which is used to handle promises in a more elegant way.


//using somehing ideas make this very easy code write and read aslo in this when we write a code for industry leval we always used it for as nesting  which makes it criticle but good for understand 
function chnagecolor(color, delay,nextColorChange){
    setTimeout((()=>{
        h1.style.color=color;
        if (nextColorChange) nextColorChange();
    }), delay);

}
chnagecolor("red",1000,()=>{
    chnagecolor("yellow",1000,()=>{
        chnagecolor("green",1000);
    });
});

//callbacknesting  => call hell //
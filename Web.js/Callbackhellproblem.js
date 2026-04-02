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
function outerFunc(){
    let x=5;
    let y=6;
function innerfunc(){
   console.log(x);
   console.log(y);
}
    innerfunc(x);
}
//output
//as we can see in leical scope there is two function one is inner function and another is outer function 
//one thing is most imp that is lexical scope works from outer function to inner function 
//also in this variable of outerfunction can be used by function variables 

const sum=function(a,b){
    return a+b;
}
sum();
//output
//5
//in function 



// HIGHER ORDER FUNCction which take one or multiple function as arguments 
function multipleGreet(fun,count){//higher order function 
    for (let i=1; i<=count; i++){
        fun();
    }
}
let greet=function(){
    console.log("hello");
}

multipleGreet(greet,1000);


//Higher order function which return a function 

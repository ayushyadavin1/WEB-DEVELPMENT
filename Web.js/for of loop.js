let fruits=["mango","apple","banana","gavava"];
for (fruits of fruits ){
    console.log(fruits);
}
//output:
//mango
//apple
//banana
//gavava
// here in this example we are using for of loop to access each element of the array.
//bascically this is used for accesing each element of the array directly without using the index value.
//as we know in for loop and while loop there is a counter variable but in this loop we are directly accessing each element of the array one by one.
// this is how for of loop works in javascript.
 

for(char of "ayush yadav"){
    console.log(char);
}
//output;
//a
//y
//u
//s
//h
//y
//a
//d
//a
//v
// here in this example we are using for of loop to access each character of the string.
// main objective of this loop 


// nested for of loop
let heroes=[["superman","batman"],["ironman","spiderman"]];
for(list of heroes){
    for(hero of set){
        console.log(hero);
    }
}

//output
//superman
//batman
//ironman
//spiderman
// here in this example we are using nested for of loop to access each element of the nested array.
// using outer loop we are accessing each array of the nested array and using inner loop we are accessing each element of the inner array.

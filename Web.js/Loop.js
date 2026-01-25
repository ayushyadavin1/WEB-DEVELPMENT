console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
//output
// 1
// 2
// 3
// 4
// 5

// IN java script there is a condition know as FOR LOOP useing that we can print the same output in a short way for a repeated task
for(let i=1;i<=5;i++){
    console.log(i);
}
//output
// 1
// 2
// 3
// 4
// 5
// Here in the above code we have used a for loop to print the numbers from 1 to 5
// in this we used initialization i=1, condition i<=5 and increment i++ and in this there is a counter variable i which is used to keep track of the number of iterations
// similarly we can use for loop to print any repeated task

for(i=10; i<=5;i++){
    console.log(i)
}
// output
// (no output as the condition is false)
// Here in the above code the initialization is i=10, condition is i<=5 and increment is i++
// as the condition is false the loop will not execute and there will be no output
// so we will never gone in the loop thats why there is no output


// for backward loop
for(let i=6;i>=1;i--){
    console.log(i);
}
// output
// 6
// 5
// 4
// 3
// 2
// 1
// Here in the above code we have used a for loop to print the numbers from 6 to 1


// print odd mumber from 1 to 15 in dor loop
for(i=1;i<=15;i++){
    console.log(i);
}
//output
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// Here in the above code we have used a for loop to print the odd numbers from 1 to 15


//nested for loop
for(let i=1; i<=3; i++){
    for(let j=1; j<=3;j++)
        console.log(j);
}
//output
// 1
// 2
// 3
// 1
// 2
// 3
// 1
// 2
// 3
// Here in the above code we have used a nested for loop to print the numbers from 1 to 3 three times
// we can this as inner loop and outerloop output
// outer loop will run 3 times and inner loop will run 3 times for each iteration of outer loop
// so total output will be 3*3=9 times
// similarly we can use nested for loop to print any repeated task

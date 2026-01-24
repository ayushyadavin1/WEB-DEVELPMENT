// push method
let car=["BMW","AUDI","FORD"];
car.push("HONDA");
car.push("ayushsystem");
//pop method
car.pop("ayushsystem");


//unshift method
car.unshift("belore","lambo");
//output : [ 'belore', 'lambo', 'BMW', 'AUDI', 'FORD', 'HONDA' ]


//shift method
car.shift();
//output : [ 'AUDI', 'FORD', 'HONDA', 'belore', 'lambo' ]



//indexof method
car.indexOf("FORD");
//output : 2



//includes method
car.includes("BMW");
//output : true



//concat nethod in array
let primary=["red","blue","green"];
let secendary=["yellow","purple","orange"];
primary.concat(secendary);
//output : [ 'red', 'blue', 'green', 'yellow', 'purple', 'orange' ]



// reverse method
primary.reverse();
// output : [ 'green', 'blue', 'red' ]

//slice method in array
let fruits=["apple","banana","mango","grapes","orange"];
car.slice(1,4);
car.length;
//output : 5
//output : [ 'banana', 'mango', 'grapes' ]

//we can use  negative index also but it will startfrom the end of array
car.slice(-2)
//output : [ 'grapes', 'orange' ]



//splice method in array
let colors=["red","blue","green","yellow","purple"];
colors.slice(4);
//output : [ 'purple' ]
colors .slice(0,1);
//output : [ 'red' ]
colors.slice(0,2,);
//output : [ 'red', 'blue' ]
colors.splice(2,0,"pink");
//output : [ 'red', 'blue', 'pink', 'green', 'yellow', 'purple' ]
colors.slice(3,3,"black");
//output : [ 'red', 'blue', 'pink', 'black', 'yellow', 'purple' ]


colors.sort
//output : [ 'black', 'blue', 'pink', 'purple', 'red', 'yellow' ]

//practice question on splice method
let months=["january","july","march","august"];
months.splice(0,0,"july");
//output : [ 'july', 'january', 'july', 'march', 'august' ]
months.splice(1,1,"june");
//output : [ 'july', 'june', 'july', 'march', 'august' ]



//array refrences
let arr=['a','b','c'];
let arr2=arr;
//output : [ 'a', 'b', 'c' ]
//always it will give true value  



//nested array mens array inside array
let num=[[1,2,3],[4,5,6],[7,8,9]];
num
//output : [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]

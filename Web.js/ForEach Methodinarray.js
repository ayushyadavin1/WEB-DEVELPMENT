let arr=[1,2,3,4,5];
let print=function(el){
    console.log(el);

};
arr.forEach(print);

// either we can use another formate for getting the same outpur

arr.forEach(function(el){
    console.log(el);
});
// This will also give same answere as well as 
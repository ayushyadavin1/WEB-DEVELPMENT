let num=[1,2,3,4];
let finalval=num.reduce((res,el)=>res+el);
console.log(finalval);

// finding maximum in an array //
let arr=[2,4,7,15,8,9,9,8,5];

let max=-1;
for (let i=0; i<arr.length; i++){
    if(max<arr[i]){
        max=arr[i];
    }
}
console.log(max);
// so output will be 15  because of in the givem array 15 is largest number as a array element

//Also we can create this logic using reduce function

let max1=arr.reduce((max1 , el) =>{
    if(max1<el){
        return el;

    }else{
        return max1;
    }
});
console.log(max1);
//using this we also print the axim value from array


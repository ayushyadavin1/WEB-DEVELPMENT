let heroes=[ ["Clark Kent","spiderman","thor"],["Bruce Wayne","ironman","hulk"]];
for(let i=0;i<heroes.length;i++){
    console.log(`list #${i}`);
    for(let j=0;j<heroes[i].length;j++){
        console.log(heroes[i][j]);
     }
}
//output;
//list #0
//Clark Kent
//spiderman
//thor
//list #1
//Bruce Wayne
//ironman
//hulk
  

// basically nested loops are used to access nested arrays.
//in which we can understand how a nested array works. using nested loops we can access each element of the nested array.
//using the outer loop we can access each array of the nested array and using the inner loop we can access each element of the inner array.
// this is how nested loops work with nested arrays.


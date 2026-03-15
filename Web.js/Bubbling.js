let div=document.querySelector("div");
let ul=document.querySelector("ul")
let lis=document.querySelector("li")

div.addEventListener("click",function(){
    console.log("div clicked ");

});
ul.addEventListener("click",function(event){
   event.stopPropagation();// it is used for stop bubbling and used in parent element to stop bubbling of event to parent element
    console.log("ul clicked ");
    
});
for(li of lis){
    li.addEventListener("click",function(){
    console.log("li clicked ");
})
}
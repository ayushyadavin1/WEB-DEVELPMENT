let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    let delbtn=Document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classlist.add("delete");

    item.appendChild(delbtn);
    ul.appendChild(item);
    inp.value="";
});
    let delbtn=document.querySelectorAll(".delete");
for(btn of delbtn){
    delbtn.addEventListener("click",function(){
        let par=this.parentElement;
        console.log(par);
        par.remove();
    })
    }


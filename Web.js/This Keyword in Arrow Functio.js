const student={
    nam:"aman",
    marks:95,
    prop:this, //global scope
    getName:function(){
        console.log(this);
        return this.name;
    },
    getmark:()=>{
        console.log(this);//paresnts scopt==>window
        return this.name;
    },
    getinfo1 :function(){
        setTimeout(() => {
            console.log("ayush yadav")
            
        }, 2000);
},
getinfo2:function(){
    setTimeout(function() {
        console.log("apna ayush bhai")
    },2000);
 },
};
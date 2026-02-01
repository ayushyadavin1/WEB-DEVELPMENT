const student ={
    name:"ayush",
    age:25,
    maths:45,
    eng:90,
    hnd:88,
    getavg(){
        console.log(this);
        let avg=(this.maths+this.eng,this.hnd)/3;
        console.log('${this.name}got avg marks=$(avg)');
        

    }
}
// basically it is very important 

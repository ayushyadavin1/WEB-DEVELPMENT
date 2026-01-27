const ayushdetails={
    name:"Ayush yadav",
    age:21,
    college:"VBSPU",
    city:"jaunpur",
    Stream:"computer science"

};
//output
// {name: 'Ayush yadav', age: 21, college: 'VBSPU', city: 'jaunpur', Stream: 'computer science'}

let delhi={
    langitude:28.7041,
    langitude:77.1025,

};
//output
// {langitude: 28.7041, langitude: 77.1025}



// task is creating an object literal to store the details of a twitter post in which username,content,likes,retweets,replies,tags  are included

let twitter ={
    username:"ayushyadav",
    content:"HELLO AYUSH BHAIYA KAISE HO ",
    likes:100,
    retweets:50,
    replies:20,
    tags:["hello","world","javascript"]
};
//OUTPUT
// {username: 'ayushyadav', content: 'HELLO AYUSH BHAIYA KAISE HO ', likes: 100, retweets: 50, replies: 20, tags: Array(3)}
// array(3): ['hello', 'world', 'javascript']


post["content"]="HELLO AYUSH BHAIYA KAISE HO  ";
//there is the resons of doing this because of in object we use sqare braket to achieve the key valer from the whole object in a quated string.


//let us seehow obeject convert a key and number in to a string

const obj={
    1:'ayush',
    2:'yadav',
    true:'isStudent',
    null:'syam',
    undefined:'kumar'
};
//output
// {'1': 'ayush', '2': 'yadav', 'true': 'isStudent', 'null': 'syam', 'undefined': 'kumar'}
// Here in the above code we have used a nested for loop to print the numbers from 1 to 3 for each iteration of outer loop
// we can see and define how the oject convert the key into the string whnever we use number ,boolean ,null or undefined as a key in the object it convert them into string.
//basically when in js we used a sqare bracket to access the key value from the object it always convert the key into string.



//now see how to add a new key value pair in the object literal
const student={
    name:"ayush",
    age:21,
    college:"VBSPU",
    city:"jaunpur"
};


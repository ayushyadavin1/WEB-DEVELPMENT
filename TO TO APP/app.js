let toDo = [];
let prompt="enter a todo item or type 'quit' to exit";


while (true) {
    if(req=="quit"){
        console.log("exiting the todo app");
        break;
    }

    if(req=="list") {
        console.log("----------------");
        for(i=0;i<toDo.length;i++){
            console.log(i,toDo[i]);
        }
        console.log("----------------");
    }else if (req==add){
            prompt("please  enter a todo task what you want to add");
            toDo.push(task);
            console.log("task added succesfully")
    }else if(req=="delete"){

        let index=prompt("enter the index of the task you want to delete");
        toDo.splice(index,1);
        console.log("task deleted successfully");
    }

} 
// Here in the above code we have created a simple todo app using while loop.
//output example:
// Enter a command (add, list, delete, quit): add
// Enter the todo task: buy groceries

import toDo from "./toDo.js";

class Project{
    toDoList = [];
    constructor(title, description){
        this.title = title;
        this.description = description;
    }

    addToDo(title, description, dueDate, priority){
        this.toDoList.push(new toDo(title, description, dueDate, priority));
    }

    removeToDo(index){
        this.toDoList.splice(index, 1);
    }

    getTitle(){
        return this.title;
    }

    getDescription(){
        return this.description;
    }

    setTitle(t){
        this.title = t;
    }

    setDescription(d){
        this.description = d;
    }
}


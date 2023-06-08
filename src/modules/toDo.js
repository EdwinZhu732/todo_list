class toDo{
    complete = false;
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    getTitle(){
        return this.title;
    }

    getDescription(){
        return this.description;
    }

    getDueDate(){
        return this.dueDate;
    }

    getPriority(){
        return this.priority;
    }

    toggleComplete(){
        this.complete = !this.complete;
    }

    setTitle(t){
        this.title = t;
    }

    setDescription(d){
        this.description = d;
    }

    setDueDate(d){
        this.dueDate = d;
    }

    setPriority(p){
        this.priority = p;
    }
    
}

export default toDo;
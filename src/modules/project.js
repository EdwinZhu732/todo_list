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


let projectArray = [];

function addProject(title, description){
    let newProject = new Project(title, description);
    projectArray.push(newProject);
    let projectList = document.querySelector(".projectList");
    let newDiv = document.createElement('div');
    newDiv.textContent = title;
    newDiv.classList.add('project');
    newDiv.dataset.index = projectArray.length - 1;
    projectList.appendChild(newDiv);
    return newProject;
}

export {addProject, projectArray};
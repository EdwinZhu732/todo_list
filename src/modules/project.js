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

    getToDoList(){
        return this.toDoList;
    }

    getToDoListLength(){
        return this.toDoList.length;
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
    newDiv.addEventListener("click", () => {
        let activeList = document.getElementsByClassName("active");
        if (activeList.length > 0){
            let activeProject = document.querySelector(".active");
            activeProject.classList.remove("active");
        }
        newDiv.classList.add("active");
        changeActiveInfo();
    });
    projectList.appendChild(newDiv);
    return newProject;
}

function changeActiveInfo(){
    let activeProject = document.querySelector(".active");
    let rightHeader = document.querySelector(".rightHeader");
    let rightProjectDescription = document.querySelector(".rightProjectDescription")
    rightHeader.textContent = projectArray[activeProject.dataset.index].getTitle(); 
    rightProjectDescription.textContent = projectArray[activeProject.dataset.index].getDescription();
    let toDoList = document.querySelector(".toDoList");
    while (toDoList.lastElementChild){
        toDoList.removeChild(toDoList.lastElementChild);
    }
    for (let i = 0; i < projectArray[activeProject.dataset.index].getToDoListLength(); i++){
        console.log(projectArray[activeProject.dataset.index].getToDoListLength());
        let myDiv = document.createElement("div");
        myDiv.classList.add("toDo");
        myDiv.dataset.index = i;
        toDoList.appendChild(myDiv);
        let left = document.createElement("div");
        left.classList.add("leftToDo");
        myDiv.appendChild(left);
        let checkBox = document.createElement("div");
        checkBox.classList.add("checkbox");
        let toDoTitle = document.createElement("div");
        toDoTitle.classList.add("toDoTitle");
        toDoTitle.textContent = (projectArray[activeProject.dataset.index].getToDoList())[i].getTitle();
        left.appendChild(checkBox);
        left.appendChild(toDoTitle);
        let right = document.createElement("div");
        right.classList.add("rightToDo");
        myDiv.appendChild(right);
        let date = document.createElement("div");
        date.classList.add("toDoDate"); 
        date.textContent = (projectArray[activeProject.dataset.index].getToDoList())[i].getDueDate();
        let priority = document.createElement("div");
        priority.classList.add("toDoPriority");
        priority.classList.add(`${(projectArray[activeProject.dataset.index].getToDoList())[i].getPriority()}`);
        let expand = document.createElement("button");
        expand.classList.add("toDoExpand");
        expand.innerHTML = "&#x25BC";
        let del = document.createElement("button");
        del.classList.add("toDoDelete");
        del.textContent = "Delete";
        right.appendChild(date);
        right.appendChild(priority);
        right.appendChild(expand);
        right.appendChild(del);
    }
}

function deleteActiveProject(){
    let activeList = document.getElementsByClassName("active");
        if (activeList.length > 0){
            let activeProject = document.querySelector(".active");
            while (activeProject.nextSibling != null){
                activeProject = activeProject.nextSibling;
                activeProject.dataset.index -= 1;
            }      
            activeProject = document.querySelector(".active");
            projectArray.splice(activeProject.dataset.index, 1);
            activeList[0].parentNode.removeChild(activeList[0]);
            localStorage.clear();
            for (let i = 0; i < projectArray.length; i++){
                localStorage.setItem(i, JSON.stringify(projectArray[i]));
            }
        }
}
export {addProject, projectArray, deleteActiveProject};
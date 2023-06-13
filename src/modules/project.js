import toDo from "./toDo.js";

class Project{
    toDoList = [];
    constructor(title, description){
        this.title = title;
        this.description = description;
    }

    addToDo(title, description, dueDate, priority, f){
        this.toDoList.push(new toDo(title, description, dueDate, priority, f));
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
        let myDiv = document.createElement("div");
        myDiv.classList.add("toDo");
        myDiv.dataset.index = i;
        toDoList.appendChild(myDiv);
        let container = document.createElement("div");
        container.classList.add("container");
        myDiv.appendChild(container);
        let left = document.createElement("div");
        left.classList.add("leftToDo");
        container.appendChild(left);
        let checkBox = document.createElement("div");
        checkBox.classList.add("checkbox");
        if ((projectArray[activeProject.dataset.index].getToDoList())[i].getComplete() == true){
            checkBox.classList.add("checked");
        }
        checkBox.addEventListener("click", () =>{
            let a = document.querySelector(".active");
            let parent = checkBox.parentNode.parentNode.parentNode;
            if (projectArray[a.dataset.index].getToDoList()[parent.dataset.index].getComplete() == false){
                checkBox.classList.add("checked");
            }
            else{
                checkBox.classList.remove("checked");
            }
            projectArray[a.dataset.index].getToDoList()[parent.dataset.index].toggleComplete();
            localStorage.clear();
            for (let i = 0; i < projectArray.length; i++){
                localStorage.setItem(i, JSON.stringify(projectArray[i]));
            }
        });
        let toDoTitle = document.createElement("div");
        toDoTitle.classList.add("toDoTitle");
        toDoTitle.textContent = (projectArray[activeProject.dataset.index].getToDoList())[i].getTitle();
        left.appendChild(checkBox);
        left.appendChild(toDoTitle);
        let right = document.createElement("div");
        right.classList.add("rightToDo");
        container.appendChild(right);
        let date = document.createElement("div");
        date.classList.add("toDoDate"); 
        date.textContent = (projectArray[activeProject.dataset.index].getToDoList())[i].getDueDate();
        let priority = document.createElement("div");
        priority.classList.add("toDoPriority");
        priority.classList.add(`${(projectArray[activeProject.dataset.index].getToDoList())[i].getPriority()}`);
        let expand = document.createElement("button");
        expand.classList.add("toDoExpand");
        expand.innerHTML = "&#x25BC";
        expand.addEventListener("click", () =>{
            let a = document.querySelector(".active");
            let p = expand.parentNode.parentNode.parentNode;
            if (expand.classList.contains("out")){
                expand.classList.remove("out");
                p.removeChild(p.lastChild);
            }
            else{
                let myDetails = document.createElement("div");
                myDetails.classList.add("details");
                myDetails.textContent = projectArray[a.dataset.index].getToDoList()[p.dataset.index].getDescription();
                p.appendChild(myDetails);
                expand.classList.add("out");
            }
        });
        let del = document.createElement("button");
        del.classList.add("toDoDelete");
        del.textContent = "Delete";
        del.addEventListener("click", () =>{
            let a = document.querySelector(".active");
            let parent = del.parentNode.parentNode.parentNode;
            while (parent.nextSibling != null){
                parent = parent.nextSibling;
                parent.dataset.index -= 1;
            }      
            parent = del.parentNode.parentNode.parentNode;
            (projectArray[a.dataset.index].getToDoList()).splice(parent.dataset.index, 1)
            parent.parentNode.removeChild(parent);
            localStorage.clear();
            for (let i = 0; i < projectArray.length; i++){
                localStorage.setItem(i, JSON.stringify(projectArray[i]));
            }
        });
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
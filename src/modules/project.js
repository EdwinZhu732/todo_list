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
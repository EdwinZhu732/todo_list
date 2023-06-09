import { addProject, projectArray, deleteActiveProject } from "./project";

function pageLoad(){
    let contentDiv = document.querySelector('.content');
    
    let leftSide = document.createElement('div');
    leftSide.classList.add("left");
    contentDiv.appendChild(leftSide);

    let leftHeader = document.createElement('div');
    leftHeader.textContent = "Projects";
    leftHeader.classList.add("leftHeader");
    leftSide.appendChild(leftHeader);
    
    leftSide.appendChild(document.createElement('hr'));

    let projectList = document.createElement('div');
    projectList.classList.add("projectList");
    leftSide.appendChild(projectList);

    let addProjectButton = document.createElement('button');
    addProjectButton.classList.add("addProject");
    addProjectButton.textContent = "Add Project";
    leftSide.appendChild(addProjectButton);

    let deleteProject = document.createElement('button');
    deleteProject.classList.add("deleteProject");
    deleteProject.textContent = "Delete Selected Project";
    leftSide.appendChild(deleteProject);

    let rightSide = document.createElement('div');
    rightSide.classList.add("right");
    contentDiv.appendChild(rightSide);

    let rightHeader = document.createElement('div');
    rightHeader.textContent = "Example Project";
    rightHeader.classList.add("rightHeader");
    rightSide.appendChild(rightHeader);
    
    let rightProjectDescription = document.createElement('div');
    rightProjectDescription.textContent = "Example Description";
    rightProjectDescription.classList.add("rightProjectDescription");
    rightSide.appendChild(rightProjectDescription);

    rightSide.appendChild(document.createElement('hr'));

    let toDoList = document.createElement('div');
    toDoList.classList.add("toDoList");
    rightSide.appendChild(toDoList);

    let addToDo = document.createElement('button');
    addToDo.classList.add("addToDo");
    addToDo.textContent = "Add Task";
    rightSide.appendChild(addToDo);

    //Project form creation
    let projectForm = document.createElement("form")
    projectForm.setAttribute("id", "projectForm");
    projectForm.style.visibility = "hidden";
    projectForm.style.opacity = 0;
    projectForm.style.position = "absolute";
    projectForm.addEventListener("submit", getProjectData, false);
    contentDiv.appendChild(projectForm);

    let projectTitle = document.createElement("label");
    projectTitle.setAttribute("for", "pTitleForm");
    projectTitle.textContent = "Project Title";
    projectForm.appendChild(projectTitle);

    let titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "pTitleForm");
    titleInput.setAttribute("name", "pTitleForm");
    titleInput.required = true;
    titleInput.placeholder = "Enter Project Title";
    projectForm.appendChild(titleInput);

    let projectDescription = document.createElement("label");
    projectDescription.setAttribute("for", "pDescriptionForm");
    projectDescription.textContent = "Project Description";
    projectForm.appendChild(projectDescription);

    let descriptionInput = document.createElement("input");
    descriptionInput.setAttribute("type", "text");
    descriptionInput.setAttribute("id", "pDescriptionForm");
    descriptionInput.setAttribute("name", "pDescriptionForm");
    descriptionInput.required = true;
    descriptionInput.placeholder = "Enter Project Description"
    projectForm.appendChild(descriptionInput);

    let buttonDiv = document.createElement('div');
    projectForm.appendChild(buttonDiv);

    let submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.textContent = "Submit";
    buttonDiv.appendChild(submit);

    let close = document.createElement("button");
    close.setAttribute("type", "button");
    close.textContent = "Close";
    close.classList.add("pCloseForm");
    buttonDiv.appendChild(close);
    //End of Project Form Creation

    //To-do Form Creation
    let toDoForm = document.createElement("form");
    toDoForm.setAttribute("id", "toDoForm");
    toDoForm.style.visibility = "hidden";
    toDoForm.style.opacity = 0;
    toDoForm.style.position = "absolute";
    toDoForm.addEventListener("submit", getToDoData, false);
    contentDiv.appendChild(toDoForm);

    let toDoTitle = document.createElement("label");
    toDoTitle.setAttribute("for", "tTitleForm");
    toDoTitle.textContent = "To-do Title";
    toDoForm.appendChild(toDoTitle);

    let toDoTitleInput = document.createElement("input");
    toDoTitleInput.setAttribute("type", "text");
    toDoTitleInput.setAttribute("id", "tTitleForm");
    toDoTitleInput.setAttribute("name", "tTitleForm");
    toDoTitleInput.required = true;
    toDoTitleInput.placeholder = "Enter To-do Title";
    toDoForm.appendChild(toDoTitleInput);

    let toDoDescription = document.createElement("label");
    toDoDescription.setAttribute("for", "tDescriptionForm");
    toDoDescription.textContent = "To-do Description (Optional)";
    toDoForm.appendChild(toDoDescription);

    let toDoDescriptionInput = document.createElement("input");
    toDoDescriptionInput.setAttribute("type", "text");
    toDoDescriptionInput.setAttribute("id", "tDescriptionForm");
    toDoDescriptionInput.setAttribute("name", "tDescriptionForm");
    toDoDescriptionInput.placeholder = "Enter To-do Description";
    toDoForm.appendChild(toDoDescriptionInput);

    let toDoButtonDiv = document.createElement('div');
    toDoForm.appendChild(toDoButtonDiv);

    let toDoSubmit = document.createElement("button");
    toDoSubmit.setAttribute("type", "submit");
    toDoSubmit.textContent = "Submit";
    toDoButtonDiv.appendChild(toDoSubmit);

    let toDoClose = document.createElement("button");
    toDoClose.setAttribute("type", "button");
    toDoClose.textContent = "Close";
    toDoClose.classList.add("tCloseForm");
    toDoButtonDiv.appendChild(toDoClose);
    //End of To-do Form Creation

    addProjectButton.addEventListener('click', () => {
        projectForm.style.opacity = 1;
        projectForm.style.transition = "opacity 0.5s ease-out";
        projectForm.style.visibility = "visible";
        leftSide.style.pointerEvents="none";
        rightSide.style.pointerEvents="none";
        leftSide.style.filter = "brightness(50%)";
        rightSide.style.filter = "brightness(50%)";
    });

    close.addEventListener("click", () => {
        projectForm.style.opacity = 0;
        projectForm.style.visibility = "hidden";
        projectForm.pTitleForm.value = "";
        projectForm.pDescriptionForm.value = "";
        leftSide.style.pointerEvents = "auto";
        rightSide.style.pointerEvents = "auto";
        leftSide.style.filter = "brightness(100%)";
        rightSide.style.filter = "brightness(100%)";
    }
    );
    
    deleteProject.addEventListener('click', () =>{
        deleteActiveProject();
        rightHeader.textContent = "Example Project";
        rightProjectDescription.textContent = "Example Description";
    });

    addToDo.addEventListener('click', () =>{
        toDoForm.style.opacity = 1;
        toDoForm.style.transition = "opacity 0.5s ease-out";
        toDoForm.style.visibility = "visible";
        leftSide.style.pointerEvents="none";
        rightSide.style.pointerEvents="none";
        leftSide.style.filter = "brightness(50%)";
        rightSide.style.filter = "brightness(50%)";
    });

    toDoClose.addEventListener("click", () => {
        toDoForm.style.opacity = 0;
        toDoForm.style.visibility = "hidden";
        toDoForm.tTitleForm.value = "";
        toDoForm.tDescriptionForm.value = "";
        leftSide.style.pointerEvents = "auto";
        rightSide.style.pointerEvents = "auto";
        leftSide.style.filter = "brightness(100%)";
        rightSide.style.filter = "brightness(100%)";
    }
    );

    loadFromLocal();
}

function getProjectData(event){
    let projectForm = document.querySelector("#projectForm");
    let title = event.target.pTitleForm.value;
    let description = event.target.pDescriptionForm.value;
    let myP = addProject(title, description);
    localStorage.setItem(projectArray.length - 1, JSON.stringify(myP));
    event.preventDefault();
    projectForm.style.visibility = "hidden";
    event.target.pTitleForm.value = "";
    event.target.pDescriptionForm.value = "";
    document.querySelector('.left').style.pointerEvents="auto";
    document.querySelector('.right').style.pointerEvents="auto";
    document.querySelector('.left').style.filter = "brightness(100%)";
    document.querySelector('.right').style.filter = "brightness(100%)";
}

function getToDoData(event){
    event.preventDefault();
}

function loadFromLocal(){
    let myArray = [];
    for (let i = 0; i < localStorage.length; i++){
        myArray.push({key: localStorage.key(i), val: localStorage.getItem(localStorage.key(i))});
    }
    myArray.sort((a, b) => a.key - b.key);
    myArray.forEach(ele => {
        let p = JSON.parse(ele.val);
        addProject(p.title, p.description);
    }
    );
    
}


export default pageLoad;
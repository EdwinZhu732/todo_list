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
    addToDo.textContent = "Add To-do";
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

    let toDoDate = document.createElement("label");
    toDoDate.setAttribute("for", "tDateForm");
    toDoDate.textContent = "Due Date";
    toDoForm.appendChild(toDoDate);

    let toDoDateInput = document.createElement("input");
    toDoDateInput.setAttribute("type", "date");
    toDoDateInput.setAttribute("id", "tDateForm");
    toDoDateInput.setAttribute("name", "tDateForm");
    toDoDateInput.required = true;
    toDoForm.appendChild(toDoDateInput);

    let priorityDiv = document.createElement("div");
    toDoForm.appendChild(priorityDiv);
    
    let low = document.createElement("label");
    low.setAttribute("for", "low");
    low.textContent = "Low Priority";
    priorityDiv.appendChild(low);

    let lowInput = document.createElement("input");
    lowInput.setAttribute("type", "radio");
    lowInput.setAttribute("id", "low");
    lowInput.setAttribute("name", "priority");
    lowInput.setAttribute("value", "low");
    lowInput.checked = true;
    priorityDiv.appendChild(lowInput);

    let med = document.createElement("label");
    med.setAttribute("for", "med");
    med.textContent = "Medium Priority";
    priorityDiv.appendChild(med);
    
    let medInput = document.createElement("input");
    medInput.setAttribute("type", "radio");
    medInput.setAttribute("id", "med");
    medInput.setAttribute("name", "priority");
    medInput.setAttribute("value", "med");
    priorityDiv.appendChild(medInput);

    let high = document.createElement("label");
    high.setAttribute("for", "high");
    high.textContent = "High Priority";
    priorityDiv.appendChild(high);

    let highInput = document.createElement("input");
    highInput.setAttribute("type", "radio");
    highInput.setAttribute("id", "high");
    highInput.setAttribute("name", "priority");
    highInput.setAttribute("value", "high");
    priorityDiv.appendChild(highInput);

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
        projectForm.style.transition = "opacity 150ms ease-in, visibility 0ms ease-in 0ms";
        projectForm.style.visibility = "visible";
        leftSide.style.pointerEvents="none";
        rightSide.style.pointerEvents="none";
        leftSide.style.filter = "brightness(50%)";
        rightSide.style.filter = "brightness(50%)";
        document.addEventListener('mouseup', pClicked, false);
    });

    close.addEventListener("click", () => {
        projectForm.style.opacity = 0;
        projectForm.style.transition = "opacity 100ms ease-in, visibility 0ms ease-in 100ms";
        projectForm.style.visibility = "hidden";
        leftSide.style.pointerEvents = "auto";
        rightSide.style.pointerEvents = "auto";
        leftSide.style.filter = "brightness(100%)";
        rightSide.style.filter = "brightness(100%)";
        document.removeEventListener('mouseup', pClicked, false);
        projectForm.pTitleForm.value = "";
        projectForm.pDescriptionForm.value = "";
    }
    );
    
    deleteProject.addEventListener('click', () =>{
        deleteActiveProject();
        rightHeader.textContent = "Example Project";
        rightProjectDescription.textContent = "Example Description";
    });

    addToDo.addEventListener('click', () =>{
        toDoForm.style.opacity = 1;
        toDoForm.style.transition = "opacity 150ms ease-in, visibility 0ms ease-in 0ms";
        toDoForm.style.visibility = "visible";
        leftSide.style.pointerEvents="none";
        rightSide.style.pointerEvents="none";
        leftSide.style.filter = "brightness(50%)";
        rightSide.style.filter = "brightness(50%)";
        document.addEventListener('mouseup', tClicked, false);
    });

    toDoClose.addEventListener("click", () => {
        toDoForm.style.opacity = 0;
        toDoForm.style.transition = "opacity 100ms ease-in, visibility 0ms ease-in 100ms";
        toDoForm.style.visibility = "hidden";
        leftSide.style.pointerEvents = "auto";
        rightSide.style.pointerEvents = "auto";
        leftSide.style.filter = "brightness(100%)";
        rightSide.style.filter = "brightness(100%)";
        document.removeEventListener('mouseup', tClicked, false);
        toDoForm.tTitleForm.value = "";
        toDoForm.tDescriptionForm.value = "";
        toDoForm.tDateForm.value = "";
        toDoForm.priority.value = "low";
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
    projectForm.style.opacity = 0;
    projectForm.style.transition = "opacity 100ms ease-in, visibility 0ms ease-in 100ms";
    projectForm.style.visibility = "hidden";
    document.querySelector('.left').style.pointerEvents="auto";
    document.querySelector('.right').style.pointerEvents="auto";
    document.querySelector('.left').style.filter = "brightness(100%)";
    document.querySelector('.right').style.filter = "brightness(100%)";
    document.removeEventListener('mouseup', pClicked, false);
    event.target.pTitleForm.value = "";
    event.target.pDescriptionForm.value = "";
}

function getToDoData(event){
    let toDoForm = document.querySelector('#toDoForm');

    event.preventDefault();
    document.removeEventListener('mouseup', tClicked, false);
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

function pClicked(event){
    let projectForm = document.querySelector("#projectForm");
    if (!projectForm.contains(event.target)) {
        projectForm.style.opacity = 0;
        projectForm.style.transition = "opacity 100ms ease-in, visibility 0ms ease-in 100ms";
        projectForm.style.visibility = "hidden";
        document.querySelector(".left").style.pointerEvents = "auto";
        document.querySelector(".right").style.pointerEvents = "auto";
        document.querySelector(".left").style.filter = "brightness(100%)";
        document.querySelector(".right").style.filter = "brightness(100%)";
        document.removeEventListener('mouseup', pClicked, false);
        projectForm.pTitleForm.value = "";
        projectForm.pDescriptionForm.value = "";
    }
}

function tClicked(event){
    let toDoForm = document.querySelector("#toDoForm");
    if (!toDoForm.contains(event.target)) {
        toDoForm.style.opacity = 0;
        toDoForm.style.transition = "opacity 100ms ease-in, visibility 0ms ease-in 100ms";
        toDoForm.style.visibility = "hidden";
        document.querySelector(".left").style.pointerEvents = "auto";
        document.querySelector(".right").style.pointerEvents = "auto";
        document.querySelector(".left").style.filter = "brightness(100%)";
        document.querySelector(".right").style.filter = "brightness(100%)";
        document.removeEventListener('mouseup', tClicked, false);
        toDoForm.tTitleForm.value = "";
        toDoForm.tDescriptionForm.value = "";
        toDoForm.tDateForm.value = "";
        toDoForm.priority.value = "low";
    }
}

export default pageLoad;
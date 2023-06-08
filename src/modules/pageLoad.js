import { addProject, projectArray } from "./project";

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
    let myForm = document.createElement("form")
    myForm.setAttribute("id", "projectForm");
    myForm.style.visibility = "hidden";
    myForm.style.position = "absolute";
    myForm.addEventListener("submit", getData, false);
    contentDiv.appendChild(myForm);

    let projectTitle = document.createElement("label");
    projectTitle.setAttribute("for", "pTitleForm");
    projectTitle.textContent = "Project Title";
    myForm.appendChild(projectTitle);

    let titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "pTitleForm");
    titleInput.setAttribute("name", "pTitleForm");
    titleInput.required = true;
    titleInput.placeholder = "Enter Project Title";
    myForm.appendChild(titleInput);

    let projectDescription = document.createElement("label");
    projectDescription.setAttribute("for", "pDescriptionForm");
    projectDescription.textContent = "Project Description";
    myForm.appendChild(projectDescription);

    let descriptionInput = document.createElement("input");
    descriptionInput.setAttribute("type", "text");
    descriptionInput.setAttribute("id", "pDescriptionForm");
    descriptionInput.setAttribute("name", "pDescriptionForm");
    descriptionInput.required = true;
    descriptionInput.placeholder = "Enter Project Description"
    myForm.appendChild(descriptionInput);

    let buttonDiv = document.createElement('div');
    myForm.appendChild(buttonDiv);

    let submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.textContent = "Submit";
    buttonDiv.appendChild(submit);

    let close = document.createElement("button");
    close.setAttribute("type", "button");
    close.textContent = "Close";
    close.classList.add("pCloseForm");
    buttonDiv.appendChild(close);

    addProjectButton.addEventListener('click', () => {
        myForm.style.visibility = "visible";
    });

    close.addEventListener("click", () => {
        myForm.style.visibility = "hidden";
        myForm.pTitleForm.value = "";
        myForm.pDescriptionForm.value = "";
    }
    );
    
    loadFromLocal();
}

function getData(event){
    let myForm = document.querySelector("#projectForm");
    let title = event.target.pTitleForm.value;
    let description = event.target.pDescriptionForm.value;
    let myP = addProject(title, description);
    localStorage.setItem(projectArray.length - 1, JSON.stringify(myP));
    event.preventDefault();
    myForm.style.visibility = "hidden";
    event.target.pTitleForm.value = "";
    event.target.pDescriptionForm.value = "";
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
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
}

export default pageLoad;
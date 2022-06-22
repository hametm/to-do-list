import { todo, project } from "./functions";

const render = (() => {
    const projectBtn = document.getElementById("projectBtn");
    const projectForm = document.getElementById("projectForm");
    const projectSubmitBtn = document.getElementById("projectSubmitBtn");
    const description = document.getElementById("description");
    const projectTitle = document.getElementById("projectTitle");
    const projectList = document.getElementById("projectList");
    
    const todoBtn = document.getElementById("todoBtn");
    const todoForm = document.getElementById("todoForm");
    const todoSubmitBtn = document.getElementById("todoSubmitBtn");
    const title = document.getElementById("title");
    const dueDate = document.getElementById("dueDate");
    const priority = document.querySelector('input[name="priority"]');
    const selectedProject = document.getElementById("projectSelect");
    const todoList = document.getElementById("todoList");

    let todoArray = [];


    // Default project
    const defaultProject = project("Untitled");
    displayProject(defaultProject);

    function displayProject(project) {
        const projectContainer = document.createElement("div");
        const projectTitle = document.createElement("h3");
        const projectDescription = document.createElement("p");
        const projectSelection = document.createElement("option");
    
        projectContainer.classList.add("projectContainer");

        projectSelection.textContent = `${project.title}`;
    
        selectedProject.appendChild(projectSelection);
    
        projectTitle.textContent = project.title;
        projectDescription.textContent = project.description;
    
        projectContainer.append(projectTitle, projectDescription);
        projectList.append(projectContainer);

        updateTodoDiv(projectContainer, project);
    
    }
    
    function displayTodo(todo) {
        const todoContainer = document.createElement("div");
        const todoTitle = document.createElement("h4");
        const todoDueDate = document.createElement("p");

        todoContainer.classList.add("todoContainer");
        todoTitle.textContent = todo.title;
        todoDueDate.textContent = todo.dueDate;

        todoContainer.append(todoTitle, todoDueDate);
        todoContainer.classList.add(`todo${todo.project}`);

    }

    function updateTodoDiv(container, project) {
        container.onclick = () => {
            todoList.innerHTML = "";
            const allContainers = document.querySelectorAll(".projectContainer");
            allContainers.forEach(div => {
                div.classList.remove("selectedContainer");
            });

            for (let i = 0; i < todoArray.length; i++) {
                if ((todoArray[i]).project == project.title) {
                    let todo = document.createElement("p");
                    todo.textContent = (todoArray[i]).title;
                    todoList.appendChild(todo);
                }
           
            }
            container.classList.add("selectedContainer");
        }

    }

    todoBtn.onclick = () => {
        todoForm.classList.remove("hidden");
    }
    
    todoSubmitBtn.onclick = () => {
        const newTodo = todo(title.value, dueDate.value, priority.checked, selectedProject.value); // Priority doesn't work
        displayTodo(newTodo);
        todoArray.push(newTodo);

        // const todos = document.getElementsByClassName(`todo${newTodo.project}`);
        // console.log(todos);
        // for (let item of todos) {
        //     projectList.appendChild(item);
        // }

        todoForm.classList.add("hidden");

    }
    
    projectBtn.onclick = () => {
        projectForm.classList.remove("hidden");
    }
    
    projectSubmitBtn.onclick = () => {
        const newProject = project(projectTitle.value, description.value);
        displayProject(newProject);
        projectForm.classList.add("hidden");
    }

})();

export { render };
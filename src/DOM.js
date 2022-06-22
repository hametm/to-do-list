import { todo, project, allTodos } from "./functions";

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


    // Default project
    const defaultProject = project("Untitled");
    displayProject(defaultProject);

    function displayProject(project) {
        const projectContainer = document.createElement("div");
        const projectTitle = document.createElement("h3");
        const projectDescription = document.createElement("p");
        const projectSelection = document.createElement("option");

        if (project.title === "Untitled") {
            projectContainer.classList.add("selectedContainer");
        }
    
        projectContainer.classList.add("projectContainer");

        projectSelection.textContent = `${project.title}`;
    
        selectedProject.appendChild(projectSelection);
    
        projectTitle.textContent = project.title;
        projectDescription.textContent = project.description;
    
        projectContainer.append(projectTitle, projectDescription);
        projectList.append(projectContainer);

        updateTodoDiv(projectContainer, project);
    
    }
    
    function renderTodo(todo) {
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

            showTodo(project);
            container.classList.add("selectedContainer");
        }

    }

    function showTodo(project) {
        for (let i = 0; i < allTodos.length; i++) {
            if ((allTodos[i]).project == project.title) {
                const todo = allTodos[i];
                const container = document.createElement("div");
                const title = document.createElement("p");
                const todoBtn = document.createElement("button");
                todoBtn.textContent = "Details";
                title.textContent = todo.title;
                container.append(title, todoBtn);
                todoList.appendChild(container);

                todoBtn.onclick = () => {
                    const todoDetails = document.createElement("div");
                    const dueDate = document.createElement("p");
                    const priority = document.createElement("p");
                    dueDate.textContent = todo.dueDate;
                    priority.textContent = todo.priority;
                    todoDetails.append(dueDate, priority);
                    container.appendChild(todoDetails);
                }


            }
        }
    }

    todoBtn.onclick = () => {
        todoForm.classList.remove("hidden");
    }
    
    todoSubmitBtn.onclick = () => {
        const newTodo = todo(title.value, dueDate.value, priority.checked, selectedProject.value); // Priority doesn't work
        renderTodo(newTodo);
        allTodos.push(newTodo);
        todoForm.classList.add("hidden");
        todoForm.reset();

        // if (newTodo.project === "Untitled") {
        //     for (let i = 0; i < allTodos.length; i++) {
        //         // if ((allTodos[i]).project == newTodo.project) {
        //             let todo = document.createElement("p");
        //             todo.textContent = (allTodos[i]).title;
        //             todoList.appendChild(todo);
        //         // }
        //     }
        // }

    }
    
    projectBtn.onclick = () => {
        projectForm.classList.remove("hidden");
    }
    
    projectSubmitBtn.onclick = () => {
        const newProject = project(projectTitle.value, description.value);
        displayProject(newProject);
        projectForm.classList.add("hidden");
        projectForm.reset();

    }

})();

export { render };
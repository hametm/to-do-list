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
    
    todoBtn.onclick = () => {
        todoForm.classList.remove("hidden");
    }
    
    todoSubmitBtn.onclick = () => {
        const newTodo = todo(title.value, dueDate.value, priority.checked, selectedProject.value); // Priority doesn't work
        console.log(newTodo);
        const newTodoContainer = document.createElement("div");
        const newTodoTitle = document.createElement("h4");
        const newTodoDueDate = document.createElement("p");

        newTodoContainer.classList.add("todoContainer");
        newTodoTitle.textContent = newTodo.title;
        newTodoDueDate.textContent = newTodo.dueDate;

        newTodoContainer.append(newTodoTitle, newTodoDueDate);
        newTodoContainer.classList.add(`${newTodo.project}`); 

        todoForm.classList.add("hidden");

    }
    
    projectBtn.onclick = () => {
        projectForm.classList.remove("hidden");
    }
    
    projectSubmitBtn.onclick = () => {
        const newProject = project(projectTitle.value, description.value);
        console.log(newProject);
        const newProjectContainer = document.createElement("div");
        const newProjectTitle = document.createElement("h3");
        const newProjectDescription = document.createElement("p");
        const newProjectSelection = document.createElement("option");

        newProjectContainer.classList.add("projectContainer");
        // newProjectContainer.classList.add(`${newProject.title}`);
        newProjectSelection.textContent = `${newProject.title}`;

        selectedProject.appendChild(newProjectSelection);

        newProjectTitle.textContent = newProject.title;
        newProjectDescription.textContent = newProject.description;
    
        newProjectContainer.append(newProjectTitle, newProjectDescription);
        projectList.append(newProjectContainer);
        projectForm.classList.add("hidden");

        displayTasks(newProjectContainer, newProject);

    }

    function displayTasks(container, project) {
        container.onclick = () => {
            console.log("project test: " + project.title);
            const todos = document.querySelectorAll(`.${project.title}`);
            const allContainers = document.querySelectorAll(".projectContainer");
            allContainers.forEach(div => {
                div.classList.remove("selectedContainer");
            })
            todos.forEach(div => {
                todoList.appendChild(div);
            });
            container.classList.add("selectedContainer");
            // todoList.append(project.todoList);
        }

    }

})();

export { render };
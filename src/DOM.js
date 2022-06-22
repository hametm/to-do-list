import { todo, project, editProject, allTodos, allProjects } from "./functions";

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

    function createDefaultProject() {
        const defaultProject = project("Untitled", "", true);
        pushToProjects(defaultProject);
        displayProject(defaultProject);
    }

    function createProject() {
        project(projectTitle.value, description.value);
    }

    function createTodo() {
        todo(title.value, dueDate.value, priority.checked, selectedProject.value); // Priority doesn't work
    }

    function pushToProjects(project) {
        allProjects.push(project);
    }

    function pushToTodoList(todo) {
        allTodos.push(todo);
    }

    function toggleSelectedContainer(project, container) {
        if (project.isSelected === false) {
            container.classList.remove("selectedContainer");
        }
        if (project.isSelected === true) {
            container.classList.add("selectedContainer");
        }
        if (project.title === "Untitled") {
            container.classList.add("defaultContainer");
        }
    }

    function renderProjectContainer(project, container, title, description, selection) {
        container.classList.add("projectContainer");
        selection.textContent = `${project.title}`;
        selectedProject.appendChild(selection);
    
        title.textContent = project.title;
        description.textContent = project.description;

        container.append(title, description);
        projectList.append(container);
    }

    createDefaultProject();


    function displayProject(project) {
        const projectContainer = document.createElement("div");
        const projectTitle = document.createElement("h3");
        const projectDescription = document.createElement("p");
        const projectSelection = document.createElement("option");

        toggleSelectedContainer(project, projectContainer);
        renderProjectContainer(project, projectContainer, projectTitle, projectDescription, projectSelection);
        updateTodoDiv(projectContainer, project);
    
    }

    function hideElement(element) {
        element.classList.add("hidden");
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

    function deselectProject() {
        todoList.innerHTML = "";
        for (let i = 0; i < allProjects.length; i++) {
            const project = allProjects[i];
            project.isSelected = false;
        }
        const allContainers = document.querySelectorAll(".projectContainer");
            allContainers.forEach(div => {
                div.classList.remove("selectedContainer");
            });
    }

    function selectProject(project) {
        project.isSelected = true;
    }

    function updateTodoDiv(container, project) {
        container.onclick = () => {
            deselectProject();
            showTodo(project);
            selectProject(project);
            toggleSelectedContainer(project, container);
        }

    }

    function showTodo(project) {
        for (let i = 0; i < allTodos.length; i++) {
            if ((allTodos[i]).project == project.title) {
                const todo = allTodos[i];
                const container = document.createElement("div");
                const title = document.createElement("p");
                const detailsBtn = document.createElement("button");
                const editBtn = document.createElement("button");
                const deleteBtn = document.createElement("button");
                const todoBtnContainer = document.createElement("div");
                todoBtnContainer.classList.add("todoBtnContainer");

                detailsBtn.textContent = "Details";
                editBtn.textContent = "Edit";
                deleteBtn.textContent = "Delete";
                container.classList.add("todoContainer");
                title.textContent = todo.title;

                todoBtnContainer.append(detailsBtn, editBtn, deleteBtn);
                container.append(title, todoBtnContainer);
                todoList.appendChild(container);

                detailsBtn.onclick = () => {
                    const todoDetails = document.createElement("div");
                    const dueDate = document.createElement("p");
                    const priority = document.createElement("p");
                    dueDate.textContent = todo.dueDate;
                    priority.textContent = todo.priority;
                    todoDetails.append(dueDate, priority);
                    container.appendChild(todoDetails);
                }

                editBtn.onclick = () => {

                }

                deleteBtn.onclick = () => {
                    editProject.removeFromProject(project, todo);
                    container.remove();
                    console.log(project.todoList);
                }

            }
        }
    }

    todoBtn.onclick = () => {
        todoForm.classList.remove("hidden");
    }
    
    todoSubmitBtn.onclick = () => {
        const newTodo = todo(title.value, dueDate.value, priority.checked, selectedProject.value); // Priority doesn't work
        pushToTodoList(newTodo);
        hideElement(todoForm);
        todoForm.reset();
        todoList.innerHTML = "";

        // Create todo container
        for (let i = 0; i < allProjects.length; i++) {
            const project = allProjects[i];
            if (project.isSelected === true) {
                showTodo(project);
                project.todoList.push(newTodo);
            }
        }

    }
    
    projectBtn.onclick = () => {
        projectForm.classList.remove("hidden");
    }

    function toggleDisabledButton() {
        disableButton();
        enableButton();
    }

    toggleDisabledButton();

    function disableButton() {
        if (projectTitle.value === "") {
            projectSubmitBtn.disabled = true;
        }
    }

    function enableButton() {
        projectTitle.oninput = () => {
            if (!(projectTitle.value === "")) {
                projectSubmitBtn.disabled = false;
            }
        }
    }

  
    projectSubmitBtn.onclick = () => {
        const newProject = project(projectTitle.value, description.value);
        pushToProjects(newProject);
        deselectProject();
        const defaultContainer = document.querySelector(".defaultContainer");
        defaultContainer.classList.remove("selectedContainer");
        newProject.isSelected = true;
        displayProject(newProject);
        hideElement(projectForm);
        projectForm.reset();

    }

})();

export { render };
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
    let priorityButtons = document.getElementsByName("priority");
    let priority = "";
    const selectedProject = document.getElementById("projectSelect");
    const todoList = document.getElementById("todoList");


    const noTodos = document.createElement("h5");
    noTodos.textContent = "No to-dos for this project yet!";
    todoList.appendChild(noTodos);

    function createDefaultProject() {
        const defaultProject = project("Untitled", "", true);
        pushToProjects(defaultProject);
        displayProject(defaultProject);
    }

    createDefaultProject();
    toggleDisabledButton(projectTitle, projectSubmitBtn);
    toggleDisabledButton(title, todoSubmitBtn);


    function displayProject(project) {
        const projectContainer = document.createElement("div");
        const projectTitle = document.createElement("h3");
        const projectDescription = document.createElement("p");
        const projectSelection = document.createElement("option");
        if (allProjects.length > 1) {
            deselectProjects();
        }
        project.isSelected = true;
        toggleSelectedContainer(project, projectContainer);
        renderProjectContainer(project, projectContainer, projectTitle, projectDescription, projectSelection);
        updateTodoDiv(projectContainer, project);
    
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

    function removeNoTodoMessage(project) {
        if (project.todoList.length > 0) {
            noTodos.remove();
        }
    }

    function addNoTodoMessage(project) {
        if (project.todoList.length === 0) {
            todoList.appendChild(noTodos);
        }
    }

    function showTodo(project) {
        for (let i = 0; i < allTodos.length; i++) {
            if ((allTodos[i]).project == project.title) {
                const todo = allTodos[i];
                const container = document.createElement("div");
                const title = document.createElement("p");
                const detailsBtn = document.createElement("button");
                const deleteBtn = document.createElement("button");
                const todoBtnContainer = document.createElement("div");
                todoBtnContainer.classList.add("todoBtnContainer");


                detailsBtn.textContent = "Details";
                deleteBtn.textContent = "Delete";
                container.classList.add("todoContainer");
                title.textContent = todo.title;

                todoBtnContainer.append(detailsBtn, deleteBtn);
                container.append(title, todoBtnContainer);
                todoList.appendChild(container);

                // Details button
                const todoDetails = document.createElement("div");
                const titleLabel = document.createElement("p");
                const todoTitle = document.createElement("p");
                const dueDateLabel = document.createElement("p");
                const dueDate = document.createElement("p");
                const priorityLabel = document.createElement("p");
                const priority = document.createElement("p");
                const projectLabel = document.createElement("p");
                const todoProject = document.createElement("p");
                const titleDiv = document.createElement("div");
                const dueDateDiv = document.createElement("div");
                const priorityDiv = document.createElement("div");
                const projectDiv = document.createElement("div");


                titleLabel.textContent = "Title: ";
                todoTitle.textContent = todo.title;
                dueDateLabel.textContent = "Due Date: ";
                dueDate.textContent = todo.dueDate;
                priorityLabel.textContent = "Priority: ";
                priority.textContent = todo.priority;
                todoDetails.classList.add("todoDetails");
                projectLabel.textContent = "Project: ";
                todoProject.textContent = todo.project;

                titleDiv.append(titleLabel, todoTitle);
                dueDateDiv.append(dueDateLabel, dueDate);
                priorityDiv.append(priorityLabel, priority);
                projectDiv.append(projectLabel, todoProject);

                hideElement(todoDetails);
                removeNoTodoMessage(project);

                detailsBtn.onclick = () => {
                    todoDetails.classList.toggle("hidden");
                    todoDetails.append(titleDiv, dueDateDiv, priorityDiv, projectDiv);
                    container.after(todoDetails);
                   
                }

                
                deleteBtn.onclick = () => {
                    editProject.removeFromProject(project, todo);
                    const index = allTodos.indexOf(todo);
                    allTodos.splice(index, 1);
                    container.remove();
                    todoDetails.remove();
                    addNoTodoMessage(project);
                }

            }
        }
    }
    
    function updateTodoDiv(container, project) {
        container.onclick = () => {
            deselectProjects();
            showTodo(project);
            selectProject(project);
            toggleSelectedContainer(project, container);
        }

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

    function deselectProjects() {
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

    function toggleDisabledButton(title, button) {
        disableButton(title, button);
        enableButton(title, button);
    }

    function disableButton(title, button) {
        if (title.value === "") {
            button.disabled = true;
        }
    }

    function enableButton(title, button) {
        title.oninput = () => {
            if (!(title.value === "")) {
                button.disabled = false;
            }
        }
    }

    function getPriorityValue() {
        for (let i = 0; i < priorityButtons.length; i++) {
            if (priorityButtons[i].checked) {
                priority = priorityButtons[i];
            }
        }
    }

    todoBtn.onclick = () => {
        todoForm.classList.toggle("hidden");
        hideElement(projectForm);
    }
    
    todoSubmitBtn.onclick = () => {
  
        getPriorityValue();
        const newTodo = todo(title.value, dueDate.value, priority.value, selectedProject.value); // Priority doesn't work
        pushToTodoList(newTodo);
        hideElement(todoForm);
        todoForm.reset();
        todoList.innerHTML = "";
        createTodoContainer(newTodo);

    }

    function createTodoContainer(todo) {
        for (let i = 0; i < allProjects.length; i++) {
            const project = allProjects[i];
            if (project.isSelected === true) {
                showTodo(project);
                project.todoList.push(todo);
            }
        }
    }
    
    projectBtn.onclick = () => {
        projectForm.classList.toggle("hidden");
        hideElement(todoForm);
    }

    projectSubmitBtn.onclick = () => {
        const newProject = project(projectTitle.value, description.value);
        pushToProjects(newProject);
        deselectProjects();
        const defaultContainer = document.querySelector(".defaultContainer");
        defaultContainer.classList.remove("selectedContainer");
        displayProject(newProject);
        hideElement(projectForm);
        projectForm.reset();
    }

})();

export { render };
import { todo, project, editProject, allTodos, allProjects } from "./functions";

const render = (() => {
    const projectBtn = document.getElementById("projectBtn");
    const projectForm = document.getElementById("projectForm");
    const projectSubmitBtn = document.getElementById("projectSubmitBtn");
    const description = document.getElementById("description");
    const projectTitle = document.getElementById("projectTitle");
    const projectList = document.getElementById("projectList");
    const projectCancelBtn = document.getElementById("projectCancelBtn");
    
    const todoBtn = document.getElementById("todoBtn");
    const todoForm = document.getElementById("todoForm");
    const todoSubmitBtn = document.getElementById("todoSubmitBtn");
    const title = document.getElementById("title");
    const dueDate = document.getElementById("dueDate");
    let priorityButtons = document.getElementsByName("priority");
    let priority = "";
    const selectedProject = document.getElementById("projectSelect");
    const todoList = document.getElementById("todoList");
    const todoCancelBtn = document.getElementById("todoCancelBtn");

    createDefaultProject();

    function createDefaultProject() {
        const defaultProject = project("Untitled", "", true);
        allProjects.addProject(defaultProject);
        displayProject(defaultProject);
    }

    function displayProject(project) {
        const projectContainer = document.createElement("div");
        const projectTitle = document.createElement("h3");
        const projectDescription = document.createElement("p");
        const projectSelection = document.createElement("option");

        if (allProjects.projectList.length > 1) deselectProjects(); // If there are more projects than just the default
        selectProject(project);
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

    function showTodo(project) {
        for (let i = 0; i < allTodos.todoList.length; i++) {
            if ((allTodos.todoList[i]).project === project.title) {
                const todo = allTodos.todoList[i];
                const container = document.createElement("div");
                const title = document.createElement("p");
                const detailsBtn = document.createElement("button");
                const deleteBtn = document.createElement("button");
                const todoBtnContainer = document.createElement("div");

                todoBtnContainer.classList.add("todoBtnContainer");
                detailsBtn.textContent = "\u24D8";
                detailsBtn.classList.add("detailsBtn");
                deleteBtn.textContent = "X";
                deleteBtn.classList.add("deleteBtn");
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
                const cancelBtn = document.createElement("button");
                const cancelDiv = document.createElement("div");

                titleLabel.textContent = "Title:";
                todoTitle.textContent = todo.title;
                dueDateLabel.textContent = "Due date:";
                dueDate.textContent = todo.dueDate;
                priorityLabel.textContent = "Priority:";
                priority.textContent = todo.priority;
                todoDetails.classList.add("todoDetails");
                projectLabel.textContent = "Project:";
                todoProject.textContent = todo.project;
                cancelBtn.textContent = "X";
                cancelBtn.classList.add("todoCancelBtn");

                titleDiv.classList.add("detailsDiv");
                dueDateDiv.classList.add("detailsDiv");
                priorityDiv.classList.add("detailsDiv");
                projectDiv.classList.add("detailsDiv");
                cancelDiv.classList.add("cancelDiv");

                titleDiv.append(titleLabel, todoTitle);
                if (todo.dueDate) dueDateDiv.append(dueDateLabel, dueDate);
                if (todo.priority) priorityDiv.append(priorityLabel, priority);
                projectDiv.append(projectLabel, todoProject);
                cancelDiv.append(cancelBtn);

                hideElement(todoDetails);

                detailsBtn.onclick = () => {
                    toggleHidden(todoDetails);
                    todoDetails.append(cancelDiv, titleDiv, dueDateDiv, priorityDiv, projectDiv);
                    container.appendChild(todoDetails);
                }
                
                deleteBtn.onclick = () => {
                    editProject.removeFromProject(project, todo);
                    allTodos.removeTodo(todo);
                    container.remove();
                    todoDetails.remove();
                }

                cancelBtn.onclick = () => {
                    toggleHidden(todoDetails);
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

    function toggleSelectedContainer(project, container) {
        if (project.isSelected === false) container.classList.remove("selectedContainer");
        if (project.isSelected === true) container.classList.add("selectedContainer");
        if (project.title === "Untitled") container.classList.add("defaultContainer");
    }

    function hideElement(element) {
        element.classList.add("hidden");
    }

    function clearTodoList() {
        todoList.innerHTML = "";
    }

    function deselectProjects() {
        clearTodoList();
        for (let i = 0; i < allProjects.projectList.length; i++) {
            const project = allProjects.projectList[i];
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
        if (title.value === "") button.disabled = true;
    }

    function enableButton(title, button) {
        title.oninput = () => {
            if (!(title.value === "")) button.disabled = false;
        }
    }

    function getPriorityValue() {
        for (let i = 0; i < priorityButtons.length; i++) {
            if (priorityButtons[i].checked) priority = priorityButtons[i];
        }
    }

    function toggleHidden(element) {
        element.classList.toggle("hidden");
    }

    function setSelectValue() {
        for (let i = 0; i < allProjects.projectList.length; i++) {
            const project = allProjects.projectList[i];
            if (project.isSelected === true) selectedProject.value = project.title;
        } 
    }

    todoBtn.onclick = () => {
        toggleHidden(todoForm);
        toggleHidden(todoBtn);
        toggleDisabledButton(title, todoSubmitBtn);
        setSelectValue();
    }
    
    todoSubmitBtn.onclick = () => {
        getPriorityValue();
        const newTodo = todo(title.value, dueDate.value, priority.value, selectedProject.value);
        allTodos.addTodo(newTodo);
        hideElement(todoForm);
        todoForm.reset();
        todoList.innerHTML = "";
        createTodoContainer(newTodo);
        toggleHidden(todoBtn);
    }

    function createTodoContainer(todo) {
        for (let i = 0; i < allProjects.projectList.length; i++) {
            const project = allProjects.projectList[i];
            if (project.isSelected) {
                showTodo(project);
                project.todoList.push(todo);
            }
        }
    }
    
    projectBtn.onclick = () => {
        toggleHidden(projectForm);
        toggleHidden(projectBtn);
        toggleDisabledButton(projectTitle, projectSubmitBtn);
    }

    projectSubmitBtn.onclick = () => {
        const newProject = project(projectTitle.value, description.value);
        allProjects.addProject(newProject);
        deselectProjects();
        const defaultContainer = document.querySelector(".defaultContainer");
        defaultContainer.classList.remove("selectedContainer");
        displayProject(newProject);
        hideElement(projectForm);
        projectForm.reset();
        toggleHidden(projectBtn);
    }

    todoCancelBtn.onclick = () => {
        toggleHidden(todoForm);
        toggleHidden(todoBtn);
    }

    projectCancelBtn.onclick = () => {
        toggleHidden(projectForm);
        toggleHidden(projectBtn);
    }

})();

export { render };
import './style.css';

const todo = (title, dueDate, priority) => {
    return { title, dueDate, priority };
}

// const editTodo = (todo) => {

// }

// const defaultProject = (() => {

// })();

const project = (description) => {
    let todoList = [];
    return { todoList, description };
};

const editProject = (() => {
    const addToProject = (project, todo) => {
        project.todoList.push(todo);
        return project.todoList;
    }
    const removeFromProject = (project, todo) => {
        const index = project.todoList.indexOf(todo);
        project.todoList.splice(index, 1);
        return project.todoList;
    }
    return { addToProject, removeFromProject };
})();

// DOM stuff

const projectBtn = document.getElementById("projectBtn");
const projectForm = document.getElementById("projectForm");
const projectSubmitBtn = document.getElementById("projectSubmitBtn");
const description = document.getElementById("description");

const todoBtn = document.getElementById("todoBtn");
const todoForm = document.getElementById("todoForm");
const todoSubmitBtn = document.getElementById("todoSubmitBtn");
const title = document.getElementById("title");
const dueDate = document.getElementById("dueDate");
const priority = document.querySelector('input[name="priority"]');

todoBtn.onclick = () => {
    todoForm.classList.remove("hidden");
}

todoSubmitBtn.onclick = () => {
    const newTodo = todo(title.value, dueDate.value, priority.checked); // Priority doesn't work
    console.log(newTodo);
}

projectBtn.onclick = () => {
    projectForm.classList.remove("hidden");
}

projectSubmitBtn.onclick = () => {
    const newProject = project(description.value);
    console.log(newProject);
}
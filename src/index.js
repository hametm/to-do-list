const todo = (title, dueDate, priority) => {
    return { title, dueDate, priority };
}

const project = (description) => {
    let todoList = [];
    return { todoList, description };
};

const editProject = (() => {

})();

function addToProject(project, todo) {
    project.todoList.push(todo);
    return project.todoList;
}

function removeFromProject(project, todo) {
    const index = project.todoList.indexOf(todo);
    project.todoList.splice(index, 1);
    return project.todoList;
}

const newProject = project("This is my project");
const dishes = todo("Wash dishes", "10/22", "High");
const cat = todo("Feed cat", "10/22", "Medium");
console.log(addToProject(newProject, dishes));
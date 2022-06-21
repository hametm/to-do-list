const todo = (title, dueDate, priority) => {
    return { title, dueDate, priority };
}

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

const newProject = project("This is my project");
const dishes = todo("Wash dishes", "10/22", "High");
const cat = todo("Feed cat", "10/22", "Medium");
console.log(editProject.addToProject(newProject, cat));

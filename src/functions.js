const todo = (title, dueDate, priority, project) => {
    return { title, dueDate, priority, project };
}

// const editTodo = (todo) => {

// }

// const defaultProject = (() => {

// })();

const project = (title, description) => {
    let todoList = [];
    return { title, description, todoList };
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

const allTodos = [];

export { 
    todo, 
    project,
    allTodos 
};
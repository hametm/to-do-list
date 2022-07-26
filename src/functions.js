const todo = (title, dueDate, priority, project) => {
    return { title, dueDate, priority, project };
}

const project = (title, description, isSelected) => {
    let todoList = [];
    return { title, description, todoList, isSelected };
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

const allTodos = (() => {
    const todoList = []
    const addTodo = (todo) => todoList.push(todo);
    const removeTodo = (todo) => {
        const index = todoList.indexOf(todo);
        todoList.splice(index, 1);
    }
    return { addTodo, removeTodo, todoList }
})();

const allProjects = (() => {
    const projectList = []
    const addProject = (project) => projectList.push(project);
    const removeProject = (project) => {
        const index = projectList.indexOf(project);
        projectList.splice(index, 1);
    }
    return { addProject, removeProject, projectList }
})();

export { 
    todo, 
    project,
    editProject,
    allTodos,
    allProjects
};
const getTodos = () => {
    return JSON.parse(localStorage.getItem('todos'));
}

const TodosSetInLS = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

const filterResult = (todos, filter) => {
    if (filter == 'All') {
        return todos;
    } else {
        return todos.filter(todo => {
            if ((todo.isCompleted && filter === 'Completed') || (!todo.isCompleted && filter === 'Uncompleted')) {
                return true;
            }
        });
    }   
}


export {
    getTodos,
    TodosSetInLS,
    filterResult,
}
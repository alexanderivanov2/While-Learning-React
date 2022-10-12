const getTodos = () => {
    return JSON.parse(localStorage.getItem('todos'));
}

const saveTodosInLocalStorage = (todos) => {
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

const addingTodo = (newTodo) => {
    const todos = getTodos();
    const newTodos = [...todos, {todo: newTodo, isCompleted: false}];
    saveTodosInLocalStorage(newTodos);
}

const completingTodo = (todoData, i, filteringCriteria) => {
    todoData.isCompleted = true;
    const todos = getTodos();
    todos[i] = todoData;
    saveTodosInLocalStorage(todos);
}

const deletingTodo = (i, todoName) => {
    const todos = getTodos();

    if (todoName) {
        i = todos.findIndex(todo => todo.todo === todoName);
    }

    const newTodos = todos.slice(0, i).concat(todos.slice(i + 1));
    saveTodosInLocalStorage(newTodos);
}

export {
    getTodos,
    saveTodosInLocalStorage as TodosSetInLS,
    filterResult,
    addingTodo,
    completingTodo,
    deletingTodo,
}
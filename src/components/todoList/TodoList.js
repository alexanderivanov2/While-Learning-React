import { useState, useEffect } from 'react';

import styles from './TodoList.module.scss';
import BackButton from "../BackButton";
import { filterResult, getTodos, TodosSetInLS } from './utils';
import TodoItem from './TodoItem';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [filterTodos, setFilterTodos] = useState('All');
    const [filtredTodos, setFilteredTodos] = useState([]);
    const [todoInput, setTodoInput] = useState('');
    const [isChange, setIsChange] = useState(true);

    useEffect(() => {
        const result = getTodos();
        const filteredResult = filterResult(result, filterTodos);
        if (isChange) {
            setTodos(result);
            setFilteredTodos(filteredResult);
            setIsChange(false);
        }
        
    }, [isChange]);

    const onChangeFilterCriteria = (e) => {
        const filterValue = e.target.value;
        setFilterTodos(filterValue);
        setIsChange(true);
    }

    const addTodo = () => {
        if (todoInput.length > 2) {
            setTodos(state => {
                const newTodos = [...state, {todo: todoInput, isCompleted: false}];
                TodosSetInLS(newTodos);
                return newTodos;
            });
            setTodoInput('');
            setIsChange(true);
        }

    }

    const completeTodo = (itemData, i) => {
        itemData.isCompleted = true;
        setTodos(state => {
            const result = [...state];
            result[i] = itemData;
            TodosSetInLS(result)
            return result;
        });
        setIsChange(true);
    }

    const deleteTodo = (i) =>  {
        setTodos(state => {
            const result = state.slice(0, i).concat(state.slice(i + 1));
            TodosSetInLS(result);
        });
        setIsChange(true);
    }

    const onInputChange = (e) => {
        console.log(e.target.value);
        setTodoInput(e.target.value);
    }

    return (
        <>
            <BackButton/>
            <section className={styles.todoListAppPage}>
                <h2 className={styles.todoListAppPage__title}>Todo List App</h2>
                <article className={styles.todoListAppPage__app}>
                    <div className={styles.todoListAppPage__app__addAndFilterWrapper}>
                        <div className={styles.todoListAppPage__app__addAndFilterWrapperCreate}>
                            <input className={styles.todoListAppPage__app__addAndFilterWrapperCreate__create} id='createTodo' value={todoInput}
                            onChange={(e) => onInputChange(e)} type='text' placeholder='Todo...'/>
                            <button className={styles.todoListAppPage__app__addAndFilterWrapperCreate__add} onClick={addTodo}>+</button>

                        </div>
                        
                        <select className={styles.todoListAppPage__app__addAndFilterWrapper__filter} id='filterTodo' value={filterTodos.filter} onChange={onChangeFilterCriteria}>
                            <option value='All'>All</option>
                            <option value='Completed'>Completed</option>
                            <option value='Uncompleted'>Uncompleted</option>
                        </select>
                    </div>
                    <ul className={styles.todoList}>
                        {filtredTodos.map((todo, i) => <TodoItem key={todo.todo} itemData={todo} itemIndex={i} completeTodo={completeTodo} deleteTodo={deleteTodo}></TodoItem>)}
                    </ul>

                </article>
            </section>
        </>
    );
}

export default TodoList;
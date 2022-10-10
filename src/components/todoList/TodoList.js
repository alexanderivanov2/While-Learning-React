import { useState, useEffect } from 'react';

import styles from './TodoList.module.scss';
import BackButton from "../BackButton";
import { filterResult, getTodos, TodosSetInLS } from './utils';
import TodoItem from './TodoItem';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [filterTodos, setFilterTodos] = useState('All');
    const [filtredTodos, setFilteredTodos] = useState([]);
    const [isChange, setIsChange] = useState(true);

    useEffect(() => {
        const result = getTodos();
        const filteredResult = filterResult(result, filterTodos);
        if (isChange) {
            setTodos(result);
            setFilteredTodos(filteredResult);
            setIsChange(false);
        }
        
    }, [filterTodos, isChange]);

    const onChangeFilterCriteria = (e) => {
        const filterValue = e.target.value;
        setFilterTodos(filterValue);
        setIsChange(true);
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

    return (
        <>
            <BackButton/>
            <section className={styles.todoListAppPage}>
                <h2 className={styles.todoListAppPage__title}>Todo List App</h2>
                <article className={styles.todoListAppPage__app}>
                    <div className={styles.todoListAppPage__app__addAndFilterWrapper}>
                        <input className={styles.todoListAppPage__app__addAndFilterWrapper__create} id='createTodo'  type='text' placeholder='Todo...'/>
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
import { useState, useEffect } from 'react';

import TodoItem from './TodoItem';
import BackButton from "../BackButton";
import { addingTodo, checkForDuplicateInTodos, completingTodo, deletingTodo, filterResult, getTodos, TodosSetInLS } from './utils';
import styles from './TodoList.module.scss';


function TodoList() {
    const [filterCriteria, setFilterCriteria] = useState('All');
    const [filtredTodos, setFilteredTodos] = useState([]);
    const [todoInput, setTodoInput] = useState('');
    const [isChange, setIsChange] = useState(true);
    const [isDuplicateTodo, setIsDuplicateTodo] = useState({
        is: false,
        msg: '',
    });

    useEffect(() => {
        const result = getTodos();
        const filteredResult = filterResult(result, filterCriteria);

        if (isChange) {
            setFilteredTodos(filteredResult);
            setIsChange(false);
        }
        
    }, [isChange]);

    const onInputChange = (e) => {
        setTodoInput(e.target.value);
    }

    const onChangeFilterCriteria = (e) => {
        const filterOption = e.target.value;
        setFilterCriteria(filterOption);
        setIsChange(true);
    }

    const addTodo = () => {
        const checkForDuplicate = checkForDuplicateInTodos(todoInput);
        if (todoInput.length > 2) {
            if (!checkForDuplicate) {
                addingTodo(todoInput);
                setTodoInput('');
                setIsDuplicateTodo({
                    is: false,
                    msg: '',
                });
            } else {
                setIsDuplicateTodo({
                    is: true,
                    msg: `${todoInput}`
                });
            } 
        }

        setIsChange(true);
    }

    const completeTodo = (todoData, i) => {
        completingTodo(todoData, i, filterCriteria);
        setIsChange(true);
    }

    const deleteTodo = (i) =>  {
        if (filterCriteria === 'All') {
            deletingTodo(i);
        } else {
            deletingTodo(i, filtredTodos[i].todo);
        }

        setIsChange(true);
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
                        
                        <select className={styles.todoListAppPage__app__addAndFilterWrapper__filter} id='filterTodo' value={filterCriteria.filter} onChange={onChangeFilterCriteria}>
                            <option value='All'>All</option>
                            <option value='Completed'>Completed</option>
                            <option value='Uncompleted'>Uncompleted</option>
                        </select>
                    </div>

                    {isDuplicateTodo.is && <h2 className={styles.todoListAppPage__app__warningMSG}>Todo with name: {isDuplicateTodo.msg} is already Exist!</h2>}
                    <ul className={styles.todoList}>
                        {filtredTodos.map((todo, i) => <TodoItem key={`${todo.todo}-${i}`} itemData={todo} itemIndex={i}
                        completeTodo={completeTodo} deleteTodo={deleteTodo}></TodoItem>)}
                    </ul>
                </article>
            </section>
        </>
    );
}

export default TodoList;
import styles from './TodoList.module.scss';

function TodoItem ({
    itemData,
    itemIndex,
    completeTodo,
    deleteTodo,
}) {
    const isCompleted = itemData.isCompleted ? styles['todoItem__name-completed'] : '';
    const todoItemClassList = [styles.todoItem__name, isCompleted];
    return (
            <li className={styles.todoItem}>
                <p className={todoItemClassList.join(' ')}>
                    {itemData.todo}
                </p>
                {!itemData.isCompleted && <button className={styles.todoItem__complete} onClick={completeTodo.bind(this, itemData, itemIndex)}>
                    &#10004;
                </button>}
                
                <button className={styles.todoItem__delete} onClick={deleteTodo.bind(this, itemIndex)}>
                    &#10006;
                </button>
            </li>
    );
}

export default TodoItem;
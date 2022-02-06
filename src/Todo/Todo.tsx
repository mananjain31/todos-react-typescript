import React from 'react';
import {AppContext, AppContextTypes, TodoType} from '../App';
import './Todo.scss'
type Props = {
    todo : TodoType
};

const Todo = (props: Props) => {

    const {dispatch} : AppContextTypes = React.useContext(AppContext);
    const toggleCompleted = () => {
        dispatch && dispatch({
            type : 'toggle',
            payload : props.todo.id,
        });   
    }
    const deleteTodo = () => {
        dispatch && dispatch({
            type : 'delete',
            payload : props.todo.id,
        });   
    }
    return <div className='todo'>
        <div className="content">
            {
                props.todo.completed ? <s>{props.todo.content}</s> : <b>{props.todo.content}</b>
            }
        </div>
        <div className="actions">
            <input
                type='checkbox'
                checked={props.todo?.completed}
                onClick={toggleCompleted}
            />
            <button onClick={deleteTodo}>
            Delete 
            </button>
        </div>
    </div>;
};

export default Todo;

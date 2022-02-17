import React from 'react';
import {AppContext, AppContextTypes, TodoType} from '../App';
import './Todo.scss'
import {UncheckedIcon, CheckedIcon, TrashIcon} from '../Assets/icons'

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

        <p className="content">
            {
                props.todo.completed ? <s>{props.todo.content}</s> : props.todo.content
            }
        </p>

        <div className="actions">

            <div onClick={toggleCompleted}>
                {
                    props.todo?.completed 
                    ? 
                    <CheckedIcon />
                    :
                    <UncheckedIcon />
                }
            </div>

            <div onClick={deleteTodo} >
                <TrashIcon  />
            </div>

        </div>

    </div>;
};

export default Todo;

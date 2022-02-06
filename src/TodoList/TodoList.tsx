import React from 'react';
import {AppContextTypes, TodoType} from '../App';
import Todo from '../Todo/Todo';
import { AppContext } from '../App';
import './TodoList.scss';

const TodoList = () => {
    const {todos} : AppContextTypes = React.useContext(AppContext);
    return <div className='todo-list'>
        {
            todos?.map(todo => <Todo todo={todo} key={todo.id}/>)
        }
    </div>;
};

export default TodoList;
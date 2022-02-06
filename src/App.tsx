import React from 'react';
import Adder from './Adder/Adder';
import TodoList from './TodoList/TodoList';

export type TodoType = {
    completed : boolean,
    content : string,
    id : number
}
export type Action = {
    type : 'delete' | 'add' | 'toggle',
    payload : string | number
}

export type AppContextTypes = {
    todos ?: TodoType[],
    dispatch ?: React.Dispatch<Action>
}

export const AppContext = React.createContext({});

function reducer(state: TodoType[], {type, payload} : Action) : TodoType[] {
    const newState : TodoType[] = [...state];
    switch(type){
        case 'delete':
            return newState.filter(todo => todo.id !== payload);
        case 'add':
            return [...newState,{
                completed : false,
                content : payload,
                id : Math.round(Math.random()*100)
            }] as TodoType[];
        case 'toggle':
            return newState.map(todo => todo.id !== payload ? todo : {...todo, completed : !todo.completed} );
        default:
            return newState;
    }
}
const App : React.FC = () :JSX.Element =>
{
    const [todos, dispatch] = React.useReducer(reducer,[] as TodoType[]);
    return (
        <div className='app'>
            <AppContext.Provider value={{todos, dispatch}}>
                <Adder/>
                <TodoList />
            </AppContext.Provider>
        </div>
    )
}

export default App;
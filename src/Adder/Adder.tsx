import React from 'react';
import { AppContext, AppContextTypes } from '../App';
import './Adder.scss';

const Adder = () => {
    const {dispatch} :AppContextTypes = React.useContext(AppContext);
    const [val, setVal] = React.useState('');
    const addTodo=()=>{
        dispatch && dispatch({
            type : 'add',
            payload : val,
        });
    }
    return <div className='adder'>
        <input 
            value={val}
            onChange={ev=>setVal(ev.target.value)}
        />
        <button
            onClick={addTodo}
        >Add</button>
    </div>;
};

export default Adder;
import React from 'react';
import { AppContext, AppContextTypes } from '../App';
import './Adder.scss';
import { PlusIcon } from '../Assets/icons';


const Adder = () => {
    const {dispatch} :AppContextTypes = React.useContext(AppContext);
    const [val, setVal] = React.useState('');
    const inputBoxRef = React.useRef<HTMLInputElement>(null);
    const addTodo=()=>{
        val.trim();
        val.length > 0 && dispatch && dispatch({
            type : 'add',
            payload : val,
        });
        inputBoxRef.current?.focus();
        setVal('');
    }
    return <div className='adder'>
        <input
            value={val}
            onChange={ev=>setVal(ev.target.value)}
            ref={inputBoxRef}
            onKeyUp = { ev => ev.key === 'Enter' && addTodo()} 
        />
        <div onClick={addTodo}>
            <PlusIcon />
        </div>
    </div>;
};


export default Adder;
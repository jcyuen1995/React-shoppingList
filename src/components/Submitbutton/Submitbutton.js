import React, { useState } from 'react';
import './Submitbutton.css'

const Submitbutton = (props) => {
    const { setValue,counter, setTable, table, setShow} = props;
    const [ name, setName] = useState('')
    
    
    return (
        <div className = "submitbutton">
            <label htmlFor="name"></label>
            <input 
                type = "text" 
                id = "name"
                name = "name"
                placeholder = "Name"
                value = {name}
                onChange = {(e) => setName(e.target.value)}
                ></input>
            <button 
                className = "btn btn-primary" 
                type = "submit" 
                onClick = {
                        function(){ 
                            setValue(name); 
                            setTable({...table, value:name, amount:counter});
                            setShow(true); 
                            setTimeout(()=>{setShow(false)},5000)
                            }
                        }
            >primary</button>
        </div>
    );
};

export default Submitbutton;
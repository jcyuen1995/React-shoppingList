import React, { useState } from 'react';
import './Submitbutton.css'

const Submitbutton = (props) => {
    const { counter, setTable, showConfirm, table} = props;
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
                        //update the datatable with new data and show the confirmation window
                        function(){ 
                            setTable([...table, {value:name, amount:counter}]);
                            showConfirm()
                            }
                        }
            >primary</button>
        </div>
    );
};

export default Submitbutton;
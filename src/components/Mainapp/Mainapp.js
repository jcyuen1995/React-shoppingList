import React, { useState } from 'react';
import './Mainapp.css';
import Counter from '../Counter/counter';
import Submitbutton from '../Submitbutton/Submitbutton';
import Table from '../Table/Table';
import Confirm from '../confirm/Confirm';

const Mainapp = () => {

    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState('');
    const [table, setTable] = useState([{}]);
    const [show, setShow] = useState(false);

    var timeo;
    function timeOut() {
        setShow(false)
    }
    //temp function to chanage state from within another child component 
    //there is a bug for when you close and resubmit immedeitely , the timerout function continues even after closing the window
    function showConfirm(seen) {
        if(!seen) {setShow(true);  timeo = setTimeout(timeOut,5000)} 
        if(seen) {setShow(false); clearTimeout(timeo)}
        
    }

    console.log(table);

    return (
        <div className = "mainapp">
            <Counter number = {counter} setCounter = {setCounter}/>
            <Table table = {table}/>
            <Submitbutton 
                setValue = {setValue} 
                counter = {counter} 
                setTable = {setTable} 
                table = {table}
                showConfirm = {showConfirm}
                />
            {show?<Confirm showConfirm = {showConfirm}/> : <></>}
        </div>
    );
};

export default Mainapp;
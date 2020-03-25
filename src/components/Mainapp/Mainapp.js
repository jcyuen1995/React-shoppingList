import React, { useState } from 'react';
import './Mainapp.css';
import Counter from '../Counter/counter';
import Submitbutton from '../Submitbutton/Submitbutton';
import Table from '../Table/Table';
import Confirm from '../confirm/Confirm';

const Mainapp = () => {

    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState('');
    const [table, setTable] = useState({});
    const [show, setShow] = useState(false);

    function showConfirm(show) {
        if(show) {setShow(!show)}
        else setShow(show)
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
                setShow = {setShow}
                />
            {show?<Confirm showConfirm = {showConfirm}/> : <></>}
        </div>
    );
};

export default Mainapp;
import React, { useState } from 'react';
import './Mainapp.css';
import Counter from '../Counter/counter';
import Submitbutton from '../Submitbutton/Submitbutton';
import Table from '../Table/Table';
import Confirm from '../confirm/Confirm';

//Create by Jonathan Yuen for Web301 at Seneca College
//This application is a simple shopping list demonstrating state hooks in functional components in ReactJS

const Mainapp = () => {

    const [counter, setCounter] = useState(0);
    const [table, setTable] = useState([{}]);
    const [show, setShow] = useState(false);

    var time;
    function timeOut() {
        setShow(false)
    }
    //temp function to chanage state from within another child component 
    //there is a bug for when you close and resubmit immedeitely , the timerout function continues even after closing the window
    function showConfirm(seen) {
        if(!seen) {setShow(true);  time = setTimeout(timeOut,5000)} 
        if(seen) {setShow(false); clearTimeout(time)}
        
    }

    console.log(table);

    return (
        <div className = "mainapp">
            <Counter number = {counter} setCounter = {setCounter}/>
            <Table table = {table}/>
            <Submitbutton
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
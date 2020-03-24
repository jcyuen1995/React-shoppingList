import React, { useState } from 'react';
import './Mainapp.css';
import Counter from '../Counter/counter';
import Submitbutton from '../Submitbutton/Submitbutton';
import Table from '../Table/Table';

const Mainapp = () => {

    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState('');
    const [confirmedAmount, setConfirmedAmount] = useState();

    return (
        <div className = "mainapp">
            <Counter number = {counter} setCounter = {setCounter}/>
            <Table value = {value} confirmedAmount = {confirmedAmount} />
            <Submitbutton setValue = {setValue} counter = {counter} setConfirmedAmount = {setConfirmedAmount}/>
        </div>
    );
};

export default Mainapp;
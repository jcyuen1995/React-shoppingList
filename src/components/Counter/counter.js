import React from 'react';
import './counter.css';

const counter = (props) => {
    const { number, setCounter } = props;
    return (
        <div className = "counter d-flex flex-wrap justify-content-center">
            <button onClick = {()=> setCounter(number+1)}>
                <span className = "material-icons">keyboard_arrow_up</span>
            </button>
            <span>{number}</span>
            {/* do not let counter fall below 0, if 0 remove the decrement icon */}
            {number >= 1 && (
            <button onClick = {()=> setCounter(number-1) }>
                <span className = "material-icons">keyboard_arrow_down</span>    
            </button>
            )}
        </div>
    );
};

export default counter;
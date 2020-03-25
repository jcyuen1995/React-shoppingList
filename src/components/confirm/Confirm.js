import React, {useState} from 'react';
import './Confirm.css';


const Confirm = (props) => {
    const {showConfirm} = props

    return (
        <div className = "confirm d-flex">
            <span className="material-icons">
                check_circle_outline
            </span>
            <p>This is a success message!</p>
            <button onClick = {showConfirm}>
                <span className="material-icons clear">
                    clear
                </span>
            </button>
        </div>
    );
};

export default Confirm;
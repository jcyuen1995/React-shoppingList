import React from 'react';
import './Table.css';

const Table = (props) => {

    const { table } = props; 
    
    return (    
        <div className = "servings">
            <table className = "table">
                <thead>
                    <tr>
                        <th scope = "col">Desert (100g serving)</th>
                        <th scope = "col">Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {table.map((desert) => {
                        //hide the null element from initial state
                        if(desert.value == null && desert.amount == null) {
                            return (<></>)
                        }
                        return (
                            // create a random key for the map function with a randomizer function
                            <tr key = {Math.random()}>
                                <td>{desert.value}</td>
                                <td>{desert.amount}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
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
                    <tr>
                        <td>{table.value}</td>
                        <td>{table.amount}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
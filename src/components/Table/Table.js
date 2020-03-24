import React from 'react';
import './Table.css';

const Table = (props) => {
    const { value, confirmedAmount } = props;
    const data = [];
    console.log(data);

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
                        <td>{value}</td>
                        <td>{confirmedAmount}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
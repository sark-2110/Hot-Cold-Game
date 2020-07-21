import React from 'react';
import './Progress.css';

const Progress = ({attempt ,guessList}) => {
    return (
        <div style={{padding: "10px"}}>
            <h4 className="progressBar">Guess #{attempt} </h4>
            <ul className="progressBar_history text-left">
                {guessList}
            </ul>
        </div>
    )
}

export default Progress;
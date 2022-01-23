import React from 'react';


const Feedback = (props) => {

    return (
        <div>
            <p><h1>Give Feedback</h1></p>
            <p>
                <button onClick={props.}>{props.}</button>
                <button onClick={props.}>{props.}</button>
                <button onClick={props.}>{props.}</button>
            </p>
        </div>
    ); 

}


export default Feedback;
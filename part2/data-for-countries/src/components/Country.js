import React from 'react';



export default function Country(props){

    const getCountryInfo = (countryName) => {
        
    }

    return (
        <div id={props.countryName}>
            <h1>{props.countryName}</h1>   
            {/* <button onClick={}>show more</button> */}
        </div>
    )
}
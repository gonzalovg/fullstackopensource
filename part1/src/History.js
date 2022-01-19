import React from 'react'


const History = (props) => {
    if(props.allClicks.lenght===0){
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }

    return (
        <div>
            button press History: {props.allClicks.join(', ')}
        </div>
    )
}

export default History;
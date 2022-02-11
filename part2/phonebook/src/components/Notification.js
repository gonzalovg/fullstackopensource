import React from "react";

const Notification = ({ msg, style }) => {
    console.log(style);
    return (
        <>
            <div style={style}>{msg}</div>
        </>
    );
};

export default Notification;

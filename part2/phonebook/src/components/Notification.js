import React from "react";

const Notification = ({ msg, style }) => {
    return (
        <>
            <div style={style}>{msg}</div>
        </>
    );
};

export default Notification;

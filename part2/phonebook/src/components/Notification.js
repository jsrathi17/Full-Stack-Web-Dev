import React from "react";

const Notification = ({message, errorStatus}) => {
    const notificationStyle = {
        color: "blue",
        background: "lightgrey",
        fontSize: 18,
        borderStyle: "solid",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    const errorStyle = {
        color: "black",
        background: "lightgrey",
        fontSize: 18,
        borderStyle: "solid",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    const currStyle = errorStatus ? errorStyle : notificationStyle
    if (message === null){
        return null
    }

    return (
        <div style={currStyle} className="error">
            {message}
        </div>
    )
}

export default Notification
import React from "react";

const Notif = ({message, errorStatus}) => {
    const notificationStyle = {
        color: "blue",
        background: "grey",
        fontSize: 18,
        borderStyle: "solid",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    const errorStyle = {
        color: "red",
        background: "grey",
        fontSize: 24,
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

export default Notif
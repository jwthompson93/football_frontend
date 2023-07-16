import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function FeedComponent({news}) {

    return (
        <>
            <h3>{news.title}</h3>
            <p>{news.detail}</p>
        </>
    )
}

export default FeedComponent;
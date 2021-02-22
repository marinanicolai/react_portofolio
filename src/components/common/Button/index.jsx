import React from 'react';

export const Button = (text, className, href, newTab) => {
    return (
        <div className="out-button">
            <a className="main-button" href={href} target={newTab && "_blank"}>
                {text}
            </a>
        </div>
    )
}
import React, { useState } from 'react'

function Question({ title, question }) {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(!isActive);
    }
    return (
        <div className='item'>
            <div className="row">
                <p>{title}</p>
                <button onClick={handleClick}>{isActive ? '-' : '+'}</button>
            </div>
            {isActive && <p className='answer'>{question}</p>}
        </div>
    )
}

export default Question

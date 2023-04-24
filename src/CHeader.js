import {React, useState} from 'react';

function CHeader() {
    var [count,setCount] = useState(0);

    function handleClick() {
        setCount(count+1);
    }

    return (
        <>
        <h3>
            This is h3 heading
        </h3>
        <button onClick={handleClick} >clicked {count} times</button>
        </>
    )
}

export default CHeader;

import {React , useState} from 'react';

function Hello() {
    const [count,setCount] = useState(0);

    function handle() {
        setCount(count+1);
    }
    return (
        <div> This is function component <br></br>
        <button onClick={handle} >{count}</button>
        </div>
    )
}

export default Hello;
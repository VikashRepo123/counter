import React, {useState} from 'react'

export default function Home() {
    // useState /state /hooks tutorial
    // current data, updated data = initial data
    const [count, setCount] = useState(0);

    const incNumber = ()=>{
        // console.log("clicked me")
        setCount(count + 1);
    }

    const decNumber = ()=>{
        // console.log("clicked me")
        setCount(count - 1);
    }

    return (
        <div className="container my-5 text-center">
            <p class="btn btn-primary" onClick={decNumber}>-</p>
            <h1>{count}</h1>
            <p class="btn btn-primary" onClick={incNumber}>+</p>
        </div>
    )
}

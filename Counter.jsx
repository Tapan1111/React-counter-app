import { useState } from 'react'
import CounterButton  from './CounterButton'
import './Counter.css'

export default function Counter(){

    const [count,setCount] = useState(0);


    function incrementParent(by){
        setCount(count + by)
    }

    function decrementParent(by){
        setCount(count - by)
    }

    function resetCounter(){
        setCount(0)
    }

    // function someMethod(by){
    //     console.log("somethhing something")
    // }

    return(
        <>
    <div>
        
        <CounterButton by={1} incrementMethod={incrementParent} decrementMethod={decrementParent}/>
        <CounterButton by={2} incrementMethod={incrementParent} decrementMethod={decrementParent}/>
        <CounterButton by={5} incrementMethod={incrementParent} decrementMethod={decrementParent}/>
        <span className="totalCounterSpan">{count}</span>

    </div>
    <div>
    <button className="resetButton" 
                   onClick={resetCounter} 
                   >reset</button>
    </div>
    </>
    )

}


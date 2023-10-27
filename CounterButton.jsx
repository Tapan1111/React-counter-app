import {PropTypes} from 'prop-types'
import { useState } from 'react'

export default function CounterButton({by,incrementMethod,decrementMethod}){


    const [count,setCount] = useState(0);

    // function incrementValue(){
    //     setCount(count + by)
    //     incrementMethod(by);   
    // }

    function decrementValue(){
        setCount(count - by)
        decrementMethod(by);    
    }

    return(
        <div className="counterComponent">
            {/* <span className="counterSpan">{count}</span> */}
            <div className="buttonDiv">
                <button className="counterButton" 
                   onClick={() => incrementMethod(by)} 
                   >+ {by}</button>
                   <button className="counterButton" 
                   onClick={decrementValue} 
                   >- {by}</button>
            </div>
            {/* <div className="buttonDiv2">
                
            </div> */}
        </div>
    )
}
CounterButton.defaultProps = {
    by: PropTypes.number 
}
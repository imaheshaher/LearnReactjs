import React, { useState } from 'react'

const Statecolor = () => {
    const[text,setText] = useState({
        text:"Nope",
        color:"red"
    })
    
    return(
        <div>
            {<h2 style={{color:text.color}}>{text.text}</h2>}

            <button onClick ={() => setText({text:"default",color:"black"}) }>Change</button>
        </div>
    )
}
export default Statecolor
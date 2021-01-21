import React, { useState } from 'react'

const FProfile = (props) => {

    const[name,setName] = useState("mahesh")
    function updatebtn(om) {
        if(name=="aher") {
            setName("mahesh")
        }
        else{
        setName("aher")
        }
    }
    return(
        <div>Function profile Component

            <h3>
                Name: {props.text.name}
                data : {props.data}
            </h3>
            <h2>
                State :: Name {name}
                <button onClick={() => updatebtn(name) }>update</button>
            </h2>
        </div>
    )
}

export default FProfile;
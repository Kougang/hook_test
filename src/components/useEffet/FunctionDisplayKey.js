import React, {useState, useEffect} from "react";

function FunctionDisplayKey(){

    const [keyCode, setKeycode] = useState('')

    const handleKeyCode = e =>{
        setKeycode(e.code)
        console.log('addEventListener active')
    }

    useEffect(()=>{
        document.addEventListener("keyup",handleKeyCode)

        return () => {
            console.log('addEventListener desactive')
            document.removeEventListener("keyup",handleKeyCode)

        }

    }, [])


    return(
        <div className="card">
            <div className="card-body">
            <h1 className="text-center"> {keyCode} </h1>
        </div>
        </div>
    )
}

export default FunctionDisplayKey
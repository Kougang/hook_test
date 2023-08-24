import React, {useEffect, useRef, useState} from 'react'



function Input() {

    // const [name, setName] = useState(null);

    // const usernameRef = useRef(null)

    // const handleSubmit = () => 
    // {
    //    setName(usernameRef.current.value) 
    // }
// ============================================
const [count, setCount] = useState(0)
const setIntervalRef = useRef()

setIntervalRef.current = useEffect(()=>{
    setInterval(()=>{
        setCount(prevCount =>{
            return prevCount + 1
            console.log(prevCount)
        })
    },1000)
}, []);




const stopIncrement = () => {
    clearInterval(setIntervalRef.current);

    
}

  return (

    <div>
        <p> {count}</p>
        <button onClick={stopIncrement}>stop</button>

    </div>
  );
}

export default Input;
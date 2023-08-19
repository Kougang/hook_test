import React,{useState, useEffect} from "react";


function FunctionCount(){

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(()=>{

        console.log('mise a jour du titre via use effet');
        setTimeout(()=>{
            document.title=`cliquez donc ${count}`
        },[])

        
    })
 
    return( 
        <div>
            <h1>{count}</h1>
            <input type="text" value ={name} onChange={e =>{setName(e.target.value)}} ></input>
            <button onClick={()=>setCount(count+1)}> clicker</button>
        </div>
    )
}
export default FunctionCount;
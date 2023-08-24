import React,{useRef} from 'react'
import FancyInput from './FancyInput'

const  Apli = () => 
{

const date = new Date();

    const FancyInputRef= useRef()

    const focusInput =(val)=>
    {
        FancyInputRef.current.focus(val)
        FancyInputRef.current.countMax()

    }


  return (
    <div className='App'>
        <FancyInput ref={FancyInputRef}/>
        <button onClick={()=>focusInput(date.getDay())}>cliquer</button>
    </div>
  )
}

export default Apli;
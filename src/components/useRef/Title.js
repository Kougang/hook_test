import React,{useRef} from 'react'


function Title() {

    const h1Renders= useRef(0)

    setInterval(()=>
    {
        h1Renders.current++
        console.log(h1Renders)

    } , 1000);


  return (
 
    <div>
        <p>{h1Renders.current}</p>
    </div>
  )
}

export default Title
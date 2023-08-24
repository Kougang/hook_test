import React, {useState, useRef, useLayoutEffect} from 'react'
import Content from './Content'


function Box() {

    const [height , setHeight] = useState(100)
    const boxRef = useRef(null)
    const timeRef = useRef(0)
     
    useLayoutEffect(()=>
    {

        if(boxRef.current.getBoundingClientRect().height < 150)
        {
            setHeight(height + 1)
        }

    },[height])

    // timeRef.current = performance.now()s

    const boxstyle= {
        width : '400px',
        height : `${height}px`,
        margin : '0 auto',
        background : height >100 ? 'red' : 'blue'

    }


  return (
    <div ref={boxRef} style={ boxstyle}>
        {`height : ${height}`}
    

        <Content/>
    </div>
  )
}

export default Box
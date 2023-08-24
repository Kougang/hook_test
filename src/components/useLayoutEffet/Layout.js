import React, {useState, useEffect, useLayoutEffect} from 'react'


function Layout() {

        const [count,setCount] = useState(0)

        useEffect(()=>
        {
            // mon effet

        },[count])

        useLayoutEffect(()=>
        {
            // dans layout effet

        },[count])


  return (
    <div>
        <h2>{count}</h2>
        <button onClick={() => setCount(count +1)}>+1</button>
    
    </div>
  )
}

export default Layout
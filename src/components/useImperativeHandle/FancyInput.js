import React,{forwardRef, useState, useRef} from 'react'

const FancyInput = React.forwardRef((props,ref) => 
{

    const inputRef = useRef()

    const [count, setCount] = useState(0);

    React.useImperativeHandle(ref,()=>(
        {
        focus: (val) => 
        {
            if(count===4)
            {

            const colors = ['red','blue','orange','green','pink','purple','yellow']
            const style = `4px solid ${colors[val]}`;
 
            inputRef.current.style.border = style;

            }
        },

        countMax: () => {
            if(count<5)
            {
                setCount(count+1)
            }

        }
    }
    )
    )

    
      return (
        <div>
        <h1>{count}</h1>
        <input type='text' ref={inputRef}  ></input>
        
        </div>
      );
    })

export default FancyInput;
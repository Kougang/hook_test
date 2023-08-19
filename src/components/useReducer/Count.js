import React, {useReducer} from 'react'

function Count() {

    const  initialState ={countOne: 0,countTwo:0} 

    const reducer = (state,action) =>{
        switch (action.type) {
            case 'increment': // incrementer count 1
                 return {...state, countOne : state.countOne + action.value }
            case 'decrement': // decrementer count 1
                 return  {...state, countOne : state.countOne - action.value }

            case 'increment2':// incrementer count 2
                return {...state, countTwo : state.countTwo + action.value }
            case 'decrement2':// decrementer count 2
                return  {...state, countTwo : state.countTwo - action.value }
            case 'reinitialisation':
                 return initialState;
            default:
                return state;
          }

    }

     const [count, dispatch] = useReducer(reducer, initialState)


  return (
    <React.Fragment>
        <div className='row'>
            <div className='col-6'>
                <h1>{count.countOne }</h1>
                <button className='btn btn-success m-3' onClick={() => dispatch({type: 'decrement', value:1})}>-</button>
                <button className='btn btn-danger m-3'  onClick={() => dispatch({type: 'increment', value:1})}>+</button>
            </div>

            <div className='col-6'>
                <h1>{count.countTwo}</h1>
                <button className='btn btn-success m-3' onClick={() => dispatch({type: 'decrement2', value:10})}>-</button>
                <button className='btn btn-danger m-3'  onClick={() => dispatch({type: 'increment2', value:10})}>+</button>
            </div>

                <div className='col'>
                <button className='btn btn-primary m-3' onClick={() => dispatch({type: 'reinitialisation'})}>reset</button>
            </div>
        </div>
    </React.Fragment>

 
  )
}



export default Count;
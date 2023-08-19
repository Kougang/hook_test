import React, {useState} from "react";

const AddTodoForm = ({addNewTodo}) => {

    const[addTodo, setAddTodo ] = useState('')

    const handleTodo = (e) => {
        e.preventDefault( )
         addNewTodo(addTodo)
         setAddTodo('')

    }
    return(
        <form className="mt-4" onSubmit={handleTodo} >
            <div className = "card card-body"> 
                <div className="form-group">
                    <label>ajouter todo</label>
                    <input className="form-control" value={addTodo} type="text" onChange={(e) => setAddTodo(e.target.value)}></input>
                    <input className="btn btn-success" type="submit" ></input>
                </div>
            </div>
        </form>
    )
}

export default AddTodoForm;
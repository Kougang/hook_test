import React, {useState} from "react";
import uuid from 'uuid';
import AddTodoForm from "./AddTodoForm";


const Todo = () =>{

    const [todos,setTodos]=useState([
        {id:1, todo: 'acheter du lait'},
        {id:2, todo: 'acheter du pain'},
        {id:3, todo: 'acheter du fromage'}
    ])

    const [warning, setWarning]= useState(false);

    const myTodos =  todos.map(todo => {
        return(
            <li  className="list-group-item"  key={todo.id}>{todo.todo}</li>
        )
    })

    const addNewTodo = (newTodo) => {

        if(newTodo!== ''){
            warning && setWarning(false)
            setTodos([...todos, {id:uuid(), todo:newTodo}])
        }
        else{
            setWarning(true) 
        }
    }

    const warningMsg= warning && <div className="alert alert-success" role="alert">veuillez indiquer un todo</div>
  


    return(
        <React.Fragment>
            {warningMsg}
            <div>
                <h1 className="text-center"> {todos.length } to-do</h1>
                <ul className="list-group">
                    {myTodos}
                </ul>
                <AddTodoForm addNewTodo = {addNewTodo}/>

            </div>
        </React.Fragment>
    )
}

export default Todo;
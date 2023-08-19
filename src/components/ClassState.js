import React,{Component} from "react";

class ClassState extends Component{
     
    constructor(props){
        super(props)

        this.state={
            counter:0

        }
    }

    addOne = () => {
        this.setState(statPrev => {
            return{
                counter: statPrev.counter + 1
            }
        })
    }

    render(){
        return(
            <React.Fragment>
                <p>class state:{this.state.counter} </p>
                <button onClick={this.addOne}>state dans class</button>
            </React.Fragment>
        )
    }
}

export default ClassState
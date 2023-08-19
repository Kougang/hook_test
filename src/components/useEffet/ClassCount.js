import React,{Component} from "react";
 
class ClassCount extends Component{

    constructor(props){
        super(props)
    
        this.state ={
            count : 0,
            name:''
        }
    }

    componentDidMount(){
        document.title = `vous avez clique ${this.state.count} fois`
    }

    // componentDidUpdate(prevProps,prevState){

    //     if (this.state.count!== prevState.count){ 
    //         console.log('mise a jour du name')
    //         document.title = `vous avez clique ${this.state.count} fois`
    //     } 
    // }
    

    render(){ 
        return(
            <React.Fragment>
                <div>
                    <h1>{this.state.count}</h1>
                    <button onClick={()=>this.setState({count : this.state.count + 1 })}>cliquer</button>
                    <input type="text" value ={this.state.name} onChange={e =>{this.setState({name: e.target.value})}} ></input>
                </div>
            </React.Fragment>
            
        )
    }
}

export default ClassCount;
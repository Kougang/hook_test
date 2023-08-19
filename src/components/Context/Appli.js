import React, { Component } from 'react'
import Profile from './Profile'
import { UserContext, colorContext } from './MyContext';


export class Appli extends Component {

  state = {
      user:{name:'Lisa',age:8}
  }


  render() {
    return (
        <UserContext.Provider value = {this.state.user}>
          <colorContext.Provider value={'red'}>
             <Profile/> 
          </colorContext.Provider>
                
        </UserContext.Provider>
      
    );
  }
}

export default Appli;
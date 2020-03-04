import React,{ Component } from 'react';


class App extends Component {
  render(){
    return(
      <React.Fragment>
        <label html for = "bar">bar</label>
        <input type = "text" onChange= {() => {console.log("I am clicked")}} />
      </React.Fragment>
    )
  }
}

export default App;

import React from 'react';


// class App extends Component {
//   render(){
//     return(
//       <React.Fragment>
//         <label html for = "bar">bar</label>
//         <input type = "text" onChange= {() => {console.log("I am clicked")}} />
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  return(
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}
const Cat = () => {
  return <div>Neow!</div>
}


export default App;

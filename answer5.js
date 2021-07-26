import React, { useEffect, useState } from 'react';
//style can be imported from a style sheet seperately
const css = {
  fontSize: "12px"
}
 
// please provide meaningful name for component name
//functional components can be created as separate component and imported here, so that it can be reused on adding new features
function CarsFuuel(props){  
  return <h1 style={css}>Car's fuel consumed: {props.children}</h1> //instead of writing props.children, children can be destructured in argument itself
}
//functional components can be created as separate component and imported here, so that it can be reused on adding new features
function Alert(props){ 
  const fuel = props.fuel;//Alert component can have a boolean prop (say - alert) just to trigger alert so that it doesnot need to maintain state. Alert component can be reused as well
  const [state, setState] = useState(0);
 
  useEffect(() => {
    if (fuel > 1200){
      setState(1);
    }
  });
 
  if (state){
    return <h2 style={{color:"red"}}>Alert</h2>;
  } else {
    return <h2>All is fine</h2>;
  }
}
 
class App extends React.Component {
  constructor(props) {
    super(props);
    
    // We declare the state
    this.state = {                       
      x: 1,    //use carPosition instead of x and fuelConsumption instead of f
      f: 0
    }
  }
  //updateCoordinates function can be avoided by writing setInterval logic within lifecycle hook
  updateCoordinates() {
    setInterval(()=> {this.setState(prevState => ({x: prevState.x + 1, f: 1 + prevState.f + prevState.x * 10}))}, 1000)
  }
 
  componentDidMount(){
    this.updateCoordinates();
  }
 
  render() {
      //it can be written as const { carPosition,fuelConsumption } = this.state using destructuring
    var x1 = this.state.x; //avoid using var . Use block scope const instead 
    var fuel = this.state.f; //avoid using var . Use block scope const instead 
 
    return (
      <div>
        <h1>Position - {x1}</h1>
        <CarsFuuel>{fuel}</CarsFuuel> 
        {/* make it <Alert alert={fuel>1200} /> */}
        <Alert fuel={fuel}/>
      </div>
    );
  }
}
 
export default App;


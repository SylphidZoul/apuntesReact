import React from 'react';

import './App.css';

class Hijo extends React.Component{
  state = {
    inputvalue : ''
  }
  HandlerClick = () => {
    this.props.onSaluda(this.state.inputvalue)
  }
  HandlerChange = (e) => {
    this.setState({
      inputvalue : e.target.value
    })
  }

  render() {
    return (
      <div className="App-header blue">
        <h1>Soy el hijo</h1>
        <input type="text" onChange={this.HandlerChange}></input>
        <hr />
        <button onClick={this.HandlerClick}>Saluda</button>
      </div>
    )
  }
}

class App extends React.Component {
  state = {
    text: ''
  }
 Manejador = (text) => {
    this.setState({ text })
    
  }
  render() {
  return (
    <div className="App">
      <div className="App-header red">
       <Hijo onSaluda={this.Manejador}/>
       {this.state.text}
        
      </div>
      
    </div>
  );
  }
}

export default App;

import React, { Component } from 'react';

class Exp4Ejercicio1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,  // Estado inicial del contador
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div className="card">
        <h3>Contador con Clase: {this.state.count}</h3>
        <button onClick={this.incrementCount}>Incrementar</button>
      </div>
    );
  }
}

export default Exp4Ejercicio1;

import React, { Component } from 'react';

class CounterClass extends Component {
  state = {
    count: 0,
  };

  // Método para incrementar el contador
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h2>Contador con Clase: {this.state.count}</h2>
        <button onClick={this.incrementCount}>Aumentar</button>
      </div>
    );
  }
}

export default CounterClass;

import React, { Component } from 'react';

class Counter extends Component {
    state = { count: 0 };

    increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <p>Contador: {this.state.count}</p>
                <button onClick={this.increaseCount}>Aumentar</button>
            </div>
        );
    }
}

export default Counter;
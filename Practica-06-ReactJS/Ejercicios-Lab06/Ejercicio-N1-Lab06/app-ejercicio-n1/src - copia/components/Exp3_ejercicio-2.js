// src/components/ToggleText.js
import React, { Component } from 'react';

class ToggleText extends Component {
    state = { visible: true };

    toggleVisibility = () => {
        this.setState({ visible: !this.state.visible });
    };

    render() {
        return (
            <div>
                {this.state.visible && <p>Este es un texto que puedes ocultar.</p>}
                <button onClick={this.toggleVisibility}>
                    {this.state.visible ? 'Ocultar' : 'Mostrar'} Texto
                </button>
            </div>
        );
    }
}

export default ToggleText;

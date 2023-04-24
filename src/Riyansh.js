import React from 'react';

class Riyansh extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : 'Riyansh'
        }
    }

    render() {
        return (
            <div>{this.state.name} {this.props.caste}</div>
        )
    }
}

export default Riyansh;
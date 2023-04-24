import React from 'react';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : 0
        }
    }
    handle = () => {
        this.setState({value : this.state.value + 1});
    }

    render() {
        return (
            <div>This is class component <br></br>
            <button onClick={this.handle} >{this.state.value}</button>
            </div>
        )
    }
}

export default Welcome;
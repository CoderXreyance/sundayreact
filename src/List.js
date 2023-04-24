import React from 'react';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : "reyansh"
    }
  }

  render() {
    return <div>{this.state.name} {this.props.caste}</div>
  }
}
export default List;
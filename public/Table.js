import React from "react";

class Table extends React.Component {
  componentDidMount() {
    console.log('table mounted')
  }
  render() {
    return (
      <div>
        {this.props.data}
      </div>
    );
  }
}

export default Table;

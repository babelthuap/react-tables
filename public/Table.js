import React from "react";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: Object.keys(this.props.data[0])
    };
  }
  componentDidMount() {
    console.log( 'this.props.data:', this.props.data )
  }
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              { this.state.headers.map((header, i) => <th key={i}>{header}</th>) }
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((datum, i) => {
              return <tr key={i}>
                { this.state.headers.map((header, j) => <td key={j}>{datum[header]}</td>) }
              </tr>
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
// {this.props.data}
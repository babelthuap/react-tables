import React from "react";
import ReactDOM from "react-dom";

import Table from "./Table";
import tableData from "./data";

class App extends React.Component {
  render() {
    return (
      <div>
        <Table data={tableData[0]} />
        <hr />
        <Table data={tableData[1]} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react'));

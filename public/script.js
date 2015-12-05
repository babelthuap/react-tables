import React from "react";
import ReactDOM from "react-dom";

import Table from "./Table";
import tableData from "./data";

console.log('tableData:', tableData);

class App extends React.Component {
  render() {
    return (
      <div>
        <Table data={ JSON.stringify(tableData[0]) } />
        <hr />
        <Table data={ JSON.stringify(tableData[1]) } />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react'));

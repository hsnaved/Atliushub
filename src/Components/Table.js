import React, { Component } from 'react';

class Table extends Component {
  render() {
    const { data } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Table;
// @flow

import React from 'react'
import TableRow from './TableRow'

type Props = {
  title: string,
  headers: [],
  rows: [],
};

const Table = ({ title, headers, rows }: Props) =>
  <div>
    <h2 className="sub-header">{title}</h2>
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            {headers.map(h => <th key={h}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map(r => <TableRow key={r} row={r} />)}
        </tbody>
      </table>
    </div>
  </div>

export default Table

// @flow

import React from 'react'

type Props = {
  row: [],
};

const TableRow = ({ row }: Props) =>
  <tr>
    {row.map((cell) => {
      if (cell === 'checkbox') {
        return <td><input type="checkbox" /></td>
      }
      return (
        <td>{cell}</td>
      )
    })}
  </tr>

export default TableRow

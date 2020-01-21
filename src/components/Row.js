import React from "react";
import "./Table.css";

const Row = rowData => (
    <tr className="table-row row m-2">
      <td className="col-6">
        <span class="title float-left">{rowData.rowData.employee_name}</span>
      </td>

      <td className="col-6">
        <span class="float-right">{rowData.rowData.employee_salary}</span>
      </td>

      <td className="col-12 mb-2">
        <span class="float-right">
          {rowData.rowData.id}/90
        </span>
      </td>
    </tr>
);

export default Row;

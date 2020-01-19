import React from "react";
import "./Table.css";




const Row = rowData => (
    <tr className="row m-2">
      <td className="col-6">
        <span class="title float-left">{rowData.rowData.employee_name}</span>
      </td>

      <td className="col-6">
        <span class="float-right">{rowData.rowData.employee_salary}</span>
      </td>

      <td className="col-12">
        <span class="float-right">
          {rowData.rowData.id}/{rowData.rowData.id}
        </span>
      </td>
    </tr>
);

export default Row;

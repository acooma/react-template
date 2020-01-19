import React from "react";
import "./Table.css";
import Row from "./Row";
import { Link } from "react-router-dom";

const Table = data => (
  <div className="table-body container">
    {data.data.map((talk, key) => (
      <Link to={"/info/" + talk.employee_name}>
        <Row rowData={talk} />
      </Link>
    ))}
  </div>
);

export default Table;

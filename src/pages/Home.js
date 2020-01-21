import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import 'bootstrap'; 

const Home = ({ match }) => {
  // const name = match.params.name;

  const [employeeInfo, setEmployeeInfo] = useState({
    id: 0,
    employee_name: "",
    employee_salary: 0,
    employee_age: 63,
    profile_image: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `http://dummy.restapiexample.com/api/v1/employees`
      );

      const body = await result.json();

      setEmployeeInfo(body);
    };
    fetchData();
  }, []);

  if (employeeInfo.data) {
    console.log("employee_name:", employeeInfo.data[0].employee_name);
    console.log("data:", employeeInfo);
  }

  if (!employeeInfo.data) return <h5>loading...</h5>;

  return (
    <React.Fragment>
      <div className="App">
        <h1>upcoming tech talks</h1>
        <Table data={employeeInfo.data} />
      </div>
    </React.Fragment>
  );
};

export default Home;

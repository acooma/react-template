import React, { useState, useEffect, useContext } from "react";

const InformationPage = ({ match }) => {
  const id = match.params.id

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
  }, [id]);

  if (employeeInfo.data) {
    console.log("employeeInfo", id);
  }

  if (!employeeInfo.data) return <h3>loading...</h3>;

  const employee = employeeInfo.data.filter(object => object.employee_name === id)

  console.log(employee)

  
  return (
    <React.Fragment>
      <h3> {employee[0].employee_name} </h3>

      <h3>{employee[0].employee_salary}</h3>

      <h3>{employee[0].employee_age}</h3>
    </React.Fragment>
  );
};

export default InformationPage;

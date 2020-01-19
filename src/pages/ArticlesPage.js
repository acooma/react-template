import React, { useState, useEffect } from "react"
import articleContent from "./articles-content.js"
import axios from "axios"

const ArticlesPage = ({ match }) => {
  const name = match.params.name

  const [employeeInfo, setEmployeeInfo] = useState({
    id: 0,
    employee_name: "",
    employee_salary: 0,
    employee_age: 63,
    profile_image: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`http://dummy.restapiexample.com/api/v1/employees`)

      const body = await result.json()

      setEmployeeInfo(body)

    }
    fetchData()
  }, [name])

  if(employeeInfo.data) {
    console.log(employeeInfo.data[0].employee_name)
  }


  if (!employeeInfo.data) return <h1>employeeInfo does not exist!</h1>
  
  return (
    <React.Fragment>
      <h1>{employeeInfo.data[0].employee_name}</h1>
    </React.Fragment>
  );
};

export default ArticlesPage;

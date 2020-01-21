import React, { useState, useEffect } from "react";
import "./InformationPage.css";

const InformationPage = ({ match }) => {
  const id = match.params.id;

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

  const employee = employeeInfo.data.filter(
    object => object.employee_name === id
  );

  console.log(employee);

  return (
    <React.Fragment>
      <div className="container mt-4">
        <div className="row">
          <div className="col-8">
            <span className="float-left title-text">
              {employee[0].employee_name}
            </span>
          </div>

          <div className="col-4">
            <span className="float-right title-text">
              {employee[0].employee_salary}
            </span>
          </div>
        </div>

        <div className="row">
          <div class="col-12">
            <span className="float-right subtitle-text">
              {employee[0].employee_age}/90
            </span>
          </div>
        </div>

        <div className="row mt-5">
          <div class="col-12">
            <span className="float-left description-text">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse rhoncus metus et metus posuere, ut scelerisque quam
              aliquam. Maecenas nec augue accumsan, malesuada ante at, dignissim
              turpis. Vivamus neque nulla, gravida vel arcu sit amet, varius
              venenatis sapien. Integer at turpis sed ligula placerat tempus.
              Etiam quis diam interdum, mattis velit a, vulputate dui. Nam
              tristique erat venenatis, interdum nunc eu, molestie lectus.
              Nullam accumsan eu diam id aliquet. Suspendisse venenatis erat
              massa, eu volutpat enim bibendum sed. Integer tellus neque,
              sagittis eu ante non, laoreet feugiat dui. Integer vel augue ex.
              Donec viverra orci nec aliquet blandit. Nulla nec nunc luctus,
              imperdiet massa nec, ornare nibh."
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InformationPage;

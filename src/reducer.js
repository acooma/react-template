import React from "react";
import { createContext, useReducer, useContext } from "react";

/* Action Types */
const SET_EMPLOYEE = "SET_EMPLOYEE";

/* Define a context and a reducer for updating the context */
const GlobalStateContext = createContext();

const initialState = {
  employee: {
    id: 0,
    employee_name: "",
    employee_salary: 0,
    employee_age: 0,
    profile_image: ""
  }
};

const globalStateReducer = (state, action) => {
  switch (action.type) {
    case SET_EMPLOYEE:
      return {
        ...state,
        employee: { ...action.payload }
      };

    default:
      return state;
  }
};

/* Export a component to provide the context to its children. This is used in our _app.js file */

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalStateReducer, initialState);

  return (
    <GlobalStateContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalStateContext.Provider>
  );
};

/* 
Default export is a hook that provides a simple API for updating the global state. 
This also allows us to keep all of this state logic in this one file
*/

const useGlobalState = () => {
  const [state, dispatch] = useContext(GlobalStateContext);

  const setEmployee = ({ id, employee_name, employee_salary, employee_age, profile_image }) => {
    dispatch({
      type: SET_EMPLOYEE,
      payload: {
        id: 0,
        employee_name: "",
        employee_salary: 0,
        employee_age: 63,
        profile_image: ""
      }
    });
  };

  return {
    setEmployee,
    employee: { ...state.employee }
  };
};

export default useGlobalState;

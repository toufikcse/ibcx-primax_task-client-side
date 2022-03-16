import React from 'react';
import { useEffect, useRef, useState } from 'react';

export const Home = React.forwardRef((props, ref) => {
    const [employees, setEmployees] = useState([]);
    const [employee, setEmployee] = useState([]);
    const inputEl = useRef(0);
  
    useEffect( () => {
      fetch('http://localhost:5000')
          .then(res => res.json())
          .then(result => {
              setEmployees(result)
          })
    }, [])
  
    const handleSearch = () => {
      const id = inputEl.current.value;
      // console.log('hitting handlesearch')
      fetch(`http://localhost:5000/${id}`)
      .then(res => res.json())
      .then(result => {
        // console.log(result)
          setEmployee(result);
      })
    }
    return (
      <div>
          <div ref={ref}>Employee Report!</div>
          <div>
            <input type="text" placeholder='Search employee using id' ref={inputEl} />
            <button onClick={handleSearch} type="submit">Search</button>
          </div>
          <br />
          <table ref={ref}>
            <th ref={ref}>Month</th>
            <th ref={ref}>Date</th>
            <th ref={ref}>Day</th>
            <th ref={ref}>ID</th>
            <th ref={ref}>Employee Name</th>
            <th ref={ref}>Department</th>
            <th ref={ref}>First-In Time</th>
            <th ref={ref}>Last-Out Time</th>
            <th ref={ref}>Hours of Work</th>
            {
              employee.map(em => <tr>
                <td >{em.month}</td>
                <td >{em.date}</td>
                <td >{em.day}</td>
                <td >{em.id}</td>
                <td >{em.employee_name}</td>
                <td >{em.department}</td>
                <td >{em.first_in_time}</td>
                <td >{em.last_out_time}</td>
                <td >{em.hours_of_works}</td>
              </tr>)
            }
          </table>
          <br />
          <br />
          <br />
          <table ref={ref}>
            <th ref={ref}>Month</th>
            <th ref={ref}>Date</th>
            <th ref={ref}>Day</th>
            <th ref={ref}>ID</th>
            <th ref={ref}>Employee Name</th>
            <th ref={ref}>Department</th>
            <th ref={ref}>First-In Time</th>
            <th ref={ref}>Last-Out Time</th>
            <th ref={ref}>Hours of Work</th>
            {
              employees.map(employee => <tr 
                key={employee._id}
              >
                <td>{employee.month}</td>
                <td>{employee.date}</td>
                <td>{employee.day}</td>
                <td>{employee.id}</td>
                <td>{employee.employee_name}</td>
                <td>{employee.department}</td>
                <td>{employee.first_in_time}</td>
                <td>{employee.last_out_time}</td>
                <td>{employee.hours_of_works}</td>
              </tr>)
            }
          </table>
        </div>
    );
});
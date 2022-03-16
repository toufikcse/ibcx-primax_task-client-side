import { useEffect, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { ComponentToPrint } from './ComponentToPrint';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState([]);
  const inputEl = useRef(0);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

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
    <div className="App">
      <div>
        <input type="text" placeholder='Search employee using id' ref={inputEl} />
        <button onClick={handleSearch} type="submit">Search</button>
      </div>
      <br />
      <table>
        <th>Month</th>
        <th>Date</th>
        <th>Day</th>
        <th>ID</th>
        <th>Employee Name</th>
        <th>Department</th>
        <th>First-In Time</th>
        <th>Last-Out Time</th>
        <th>Hours of Work</th>
        {
          employee.map(em => <tr>
            <td>{em.month}</td>
            <td>{em.date}</td>
            <td>{em.day}</td>
            <td>{em.id}</td>
            <td>{em.employee_name}</td>
            <td>{em.department}</td>
            <td>{em.first_in_time}</td>
            <td>{em.last_out_time}</td>
            <td>{em.hours_of_works}</td>
          </tr>)
        }
      </table>
      <br />
      <br />
      <br />
      <table>
        <th>Month</th>
        <th>Date</th>
        <th>Day</th>
        <th>ID</th>
        <th>Employee Name</th>
        <th>Department</th>
        <th>First-In Time</th>
        <th>Last-Out Time</th>
        <th>Hours of Work</th>
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
      <br />
      <br />
      <div>
      <App ref={componentRef} />
      <button onClick={handlePrint}>Print this out!</button>
      </div>
    </div>
  );
}

export default App;

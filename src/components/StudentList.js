import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/StudentsList.css';



function StudentList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/students/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  },[]);


  

  return (
    
    <div>
      <Link className='return' to='/'>Torna alla Home</Link>
      <Link className='new_student_button' to='/students/create'>Crea un nuovo Studente</Link>
      <h1 className='title'>App Students</h1>
      <div className='students_wrapper'>
        {data.map(item => (
          <div className="card" key={item.id}>
            <h2>{item.name} {item.surname}</h2>
            <p><strong>Età:</strong> {item.age}</p>
            <p><strong>Email:</strong> {item.email}</p>
            <Link className='preferences' to={`/students/${item.id}`}>Gestisci Studente</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentList;

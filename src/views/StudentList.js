import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/StudentsList.css';
import StudentCard from '../components/StudentCard';


function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/students/')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.log(error));
  },[]);

  return (
    
    <div>
      <Link className='return' to='/'>Torna alla Home</Link>
      <Link className='new_student_button' to='/students/create'>Crea un nuovo Studente</Link>
      <h1 className='title'>App Students</h1>
      <div className='students_wrapper'>
      {students.map(student => (
          <StudentCard
            key={student.id}
            id={student.id}
            name={student.name}
            surname={student.surname}
            age={student.age}
            email={student.email}
          />
        ))}
      </div>
    </div>
  );
}

export default StudentList;

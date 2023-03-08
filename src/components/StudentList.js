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


  function handleClick(event) {
    const idItem = event.target.id;
    fetch('http://localhost:8080/api/students/delete/' + idItem, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
      window.location.reload();
  }

  function handleUpdate(event) {
    const idItem = event.target.id;
    window.location.href = '/students/update/' + idItem;
  }

  return (
    
    <div>
      <h1 className='title'>App Students</h1>
      <a className='new_student_button' href="/students/create">Crea un nuovo Studente</a>
      <div className='students_wrapper'>
        {data.map(item => (
          <div className='card_wrapper' key={item.id}>
            <Link to={`/students/${item.id}`} />
              <div className="card">
                <a href={`students/${item.id}`}>
                  <h2>{item.name} {item.surname}</h2>
                  <p><strong>Età:</strong> {item.age}</p>
                  <p><strong>Email:</strong> {item.email}</p>
                </a>
                <button className='modif' id={item.id} onClick={handleUpdate}>Modifica</button><br />
                <button id={item.id} onClick={handleClick}>Elimina</button>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentList;

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

  return (
    
    <div>
      <h1 className='title'>List Students:</h1>
      <div className='students_wrapper'>
        {data.map(item => (
          <div className='card_wrapper' key={item.id}>
            <Link to={`/students/${item.id}`} />
            <a href={`students/${item.id}`}>
              <ul>
                <li>Nome : {item.name}</li>
                <li>Età : {item.age}</li>
                <li>Voto : {item.grade}</li>
              </ul>
            </a>
          <button id={item.id} onClick={handleClick}>Elimina dati</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentList;

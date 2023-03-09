import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/StudentDetails.css';

function StudentDetails() {
  // Ottengo l'ID dello studente dalla URL utilizzando useParams()
  const { id } = useParams();

  // Crea uno stato per contenere le informazioni sullo studente
  const [student, setStudent] = useState(null);

  // Recupero le informazioni sullo studente dalle API utilizzando l'ID
  useEffect(() => {
    fetch(`http://localhost:8080/api/students/${id}`)
      .then(response => response.json())
      .then(data => setStudent(data))
      .catch(error => console.log(error));
  }, [id]);

  // Mostro un messaggio di caricamento se le informazioni dello studente non sono ancora state recuperate
  if (!student) {
    return <p>Caricamento in corso...</p>;
  }

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
      window.location.href = '/students/';
  }

  function handleUpdate(event) {
    const idItem = event.target.id;
    window.location.href = '/students/update/' + idItem;
  }

  // Mostro le informazioni sullo studente
  return (
    <div class="student-details">
      <div class="card">
        <h1>{student.name} {student.surname}</h1>
        <p><strong>Età: </strong>{student.age}</p>
        <p><strong>Email: </strong>{student.email}</p>
        <Link className='options_buttons edit' id={student.id} onClick={handleUpdate}>Modifica</Link>
        <Link className='options_buttons delete' id={student.id} onClick={handleClick}>Elimina</Link>
      </div>
      <Link className='link' to="/students">Torna alla lista degli studenti</Link>
    </div>
  );
}

export default StudentDetails;
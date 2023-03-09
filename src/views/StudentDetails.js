import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/StudentDetails.css'; 

function StudentDetails() { 
  const { id } = useParams(); // ottiene l'ID dello studente dalla URL utilizzando il hook useParams()

  const [student, setStudent] = useState(null); // definisce uno stato per contenere le informazioni sullo studente

  // Recupera le informazioni sullo studente dalle API utilizzando l'ID, utilizzando il hook useEffect()
  useEffect(() => {
    fetch(`http://localhost:8080/api/students/${id}`)
      .then(response => response.json())
      .then(data => setStudent(data))
      .catch(error => console.log(error));
  }, [id]);

  // Se le informazioni sullo studente non sono ancora state recuperate, mostra un messaggio di caricamento
  if (!student) {
    return <p>Caricamento in corso...</p>;
  }

  // Definisce le funzioni per eliminare uno studente
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
  // Definisce le funzioni per aggiornare uno studente
  function handleUpdate(event) {
    const idItem = event.target.id;
    window.location.href = '/students/update/' + idItem;
  }

  // Mostra le informazioni sullo studente e i pulsanti per eliminare e aggiornare lo studente
  return (
    <div className="student-details"> 
      <div className="card"> 
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

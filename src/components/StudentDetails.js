import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function StudentDetails() {
  // Ottengo l'ID dello studente dalla URL utilizzando useParams()
  const { id } = useParams();

  // Crea uno stato per contenere le informazioni sullo studente
  const [student, setStudent] = useState(null);

  // Recupera le informazioni sullo studente dalle API utilizzando l'ID
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

  // Mostro le informazioni sullo studente
  return (
    <div>
      <h1>{student.name}</h1>
      <p>Età: {student.age}</p>
      <Link to="/students">Torna alla lista degli studenti</Link>
    </div>
  );
}

export default StudentDetails;
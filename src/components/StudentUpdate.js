import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../styles/StudentUpdate.css';



function StudentUpdate() {
  const [cancel, setCancel] = useState(false);

  // Definiamo l'URL base delle API RESTful
  const base_url = 'http://localhost:8080/api/students/';
  // Estraiamo l'id dello studente dalla URL tramite il hook useParams di React Router
  const { id } = useParams();
  // Definiamo lo stato iniziale dello studente con id, nome, cognome, eta, email vuoti
  const [student, setStudent] = useState({ id: id, name: "", surname: "", age: "", email: "" });

  // Questo effetto si attiva al caricamento del componente e carica i dati dello studente dal server
  useEffect(() => {
    // Inviamo una richiesta GET al server per caricare i dati dello studente
    fetch(base_url + id)
      .then(response => response.json())
      .then(data => {
        // Aggiorniamo lo stato dello studente con i dati ricevuti dal server
        setStudent(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  // Queste funzioni gestiscono la modifica degli input del form
  const handleNameChange = event => {
    setStudent({ ...student, name: event.target.value });
  };

  const handleSurnameChange = event => {
    setStudent({ ...student, surname: event.target.value });
  };

  const handleAgeChange = event => {
    setStudent({ ...student, age: event.target.value });
  };

  const handleEmailChange = event => {
    setStudent({ ...student, email: event.target.value });
  };

  // Questa funzione gestisce il submit del form
  const handleSubmit = event => {
    // Impediamo il comportamento predefinito del form, che è quello di ricaricare la pagina
    event.preventDefault();

    if (cancel) {
      // L'utente ha cliccato il pulsante "Annulla", quindi non effettuiamo la modifica
      window.location.href = '/students';
      return;
    }
    // Inviamo una richiesta PUT al server per aggiornare i dati dello studente
    fetch(`${base_url}update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student)
    })
      .then(response => {
        // Se la richiesta ha avuto successo, torniamo alla lista degli studenti
        if (response.ok) {
          window.location.href = '/students';
        } else {
          throw new Error("Failed to update student");
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  function handleCancel() {
  setCancel(true);
  window.location.href = '/students';
}

  // Questo è il markup del form
  return (
    <div>
      <h1>Update Student</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" value={student.name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="surname">Cognome: </label>
          <input type="text" id="surname" value={student.surname} onChange={handleSurnameChange} />
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input type="number" id="age" value={student.age} onChange={handleAgeChange} />
        </div>
        <div>
          <label htmlFor="email">E-Mail: </label>
          <input type="email" id="email" value={student.email} onChange={handleEmailChange} />
        </div>
        <div>
          <button className="button_blue" type="submit">Modifica</button>
          <button type='button' onClick={handleCancel}>Annulla</button>
        </div>
      </form>
    </div>
  );
}

export default StudentUpdate;



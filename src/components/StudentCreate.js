import React, { useState } from 'react';

function StudentCreate() {
  // Definiamo uno stato iniziale per lo studente con nome e età vuoti
  const [student, setStudent] = useState({
    name: '',
    surname: '',
    age: '',
    email: ''
  });

  // Questa funzione gestisce la modifica degli input del form
  const handleInputChange = event => {
    // Estrapoliamo il nome e il valore dell'input dalla proprietà "target" dell'evento
    const { name, value } = event.target;
    // Aggiorniamo lo stato dello studente con il nuovo valore dell'input
    setStudent(prevState => ({ ...prevState, [name]: value }));
  };

  // Questa funzione gestisce il submit del form
  const handleSubmit = event => {
    // Impediamo il comportamento predefinito del form, che è quello di ricaricare la pagina
    event.preventDefault();
    // Stampa a console lo stato corrente dello studente
    console.log(student);
    // Inviamo una richiesta POST al server per creare uno studente
    fetch('http://localhost:8080/api/students/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(student)
    })
    // Redirect alla lista degli studenti dopo la creazione di uno studente
    window.location.href = '/students';
    window.location.reload = '/students';
  };

  // Questo è il markup del form
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={student.name}
        onChange={handleInputChange}
      />
      <label htmlFor="surname">Cognome</label>
      <input
        type="text"
        id="surname"
        name="surname"
        value={student.surname}
        onChange={handleInputChange}
      />
      <label htmlFor="age">Age</label>
      <input
        type="number"
        id="age"
        name="age"
        value={student.age}
        onChange={handleInputChange}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={student.email}
        onChange={handleInputChange}
      />
      <button type='submit'>Crea</button>
    </form>
  )

}

export default StudentCreate;

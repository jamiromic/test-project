import React, { useState } from 'react';
import ButtonElement from '../components/ButtonElement';

function StudentCreate() {
  // Definiamo uno stato iniziale per lo studente con nome e età vuoti
  const [student, setStudent] = useState({
    name: '',
    surname: '',
    age: 0,
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
  };

  // Questo è il markup del form
  return (
    <div>
      <ButtonElement 
      text='Torna alla lista degli studenti'
      url='/students'
      bgcolor='#7fe37f'
      color='black'
      />
    <form className='d-flex flex-column align-items-center' onSubmit={handleSubmit}>
      <label htmlFor="name">Nome</label>
      <input
        style={{width: '300px'}}
        type="text"
        id="name"
        name="name"
        value={student.name}
        onChange={handleInputChange}
      />
      <label htmlFor="surname">Cognome</label>
      <input
        style={{width: '300px'}}
        type="text"
        id="surname"
        name="surname"
        value={student.surname}
        onChange={handleInputChange}
      />
      <label htmlFor="age">Età</label>
      <input
        style={{width: '300px'}}
        type="number"
        id="age"
        name="age"
        value={student.age}
        onChange={handleInputChange}
      />
      <label htmlFor="email">Email</label>
      <input
        style={{width: '300px'}}
        type="email"
        id="email"
        name="email"
        value={student.email}
        onChange={handleInputChange}
      />
      <ButtonElement 
        type='submit'
        text='Crea'
        bgcolor='rgb(255, 232, 127)'
        color='black'
        onClick={handleSubmit}
      />
    </form>
    </div>
    
  )

}

export default StudentCreate;

import React from 'react';
import '../styles/StudentCard.css';
import ButtonElement from './ButtonElement';

function StudentCard(props) { 
// Senza utilizzo della destrutturazione
//    const id = props.id;
//    const name = props.name;
//    const surname = props.surname;
//    const age = props.age;
//    const email = props.email;

// Con utilizzo della destrutturazione, il codice risulta molto più sintetico
  const { id, name, surname, age, email } = props;

  return ( // il componente ritorna la seguente struttura HTML
    <div className="card"> 
      <h2>{name} {surname}</h2>
      <p><strong>Età:</strong> {age}</p> 
      <p><strong>Email:</strong> {email}</p>
      <ButtonElement 
      url={`/students/${id}`}
      text={'Gestisci Studente'}
      bgcolor={'blue'}
      width={170}
      color={'white'}
      />
    </div>
  );
}

export default StudentCard; 
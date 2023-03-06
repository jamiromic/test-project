import React, { useState } from 'react';

function StudentCreate() {
  const [student, setStudent] = useState({
    name: '',
    age: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setStudent(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(student); // qui puoi inviare i dati al server
  };

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={student.name}
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
      <button onSubmit={handleSubmit}>Crea</button>
      </form>
  )

}

export default StudentCreate;
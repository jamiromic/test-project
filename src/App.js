import { Route, Routes } from 'react-router-dom';
import StudentList from './components/StudentList';
import StudentDetails from './components/StudentDetails';
import StudentCreate from './components/StudentCreate';
import StudentUpdate from './components/StudentUpdate';

function App() {
  
  return (
    
      <Routes>
        {/* Pagina Lista Studenti */}
        <Route exact path="/students" element={<StudentList/>} />
        {/* Pagina Dettaglio Studente */}
        <Route path="/students/:id" element={<StudentDetails/>} />
        {/* Pagina per la creazione di uno studente */}
        <Route path="/students/create" element={<StudentCreate/>} />
        {/* Pagina per la modifica di uno studente */}
        <Route path="/students/update/:id" element={<StudentUpdate/>} />
      </Routes>

  );
}

export default App;

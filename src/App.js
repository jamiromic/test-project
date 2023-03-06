import { Route, Routes } from 'react-router-dom';
import StudentList from './components/StudentList';
import StudentDetails from './components/StudentDetails';
import StudentCreate from './components/StudentCreate';

function App() {
  
  return (
    
      <Routes>
        {/* Pagina Lista Studenti */}
        <Route exact path="/students" element={<StudentList/>} />
        {/* Pagina Dettaglio Studente */}
        <Route path="/students/:id" element={<StudentDetails/>} />
        {/* Pagina per la creazione di uno studente */}
        <Route path="/students/create" element={<StudentCreate/>} />
      </Routes>

  );
}

export default App;

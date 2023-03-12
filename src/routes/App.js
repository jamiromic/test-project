import { Route, Routes } from 'react-router-dom';
import StudentList from '../views/StudentList';
import StudentDetails from '../views/StudentDetails';
import StudentCreate from '../views/StudentCreate';
import StudentUpdate from '../views/StudentUpdate';
import Login from '../views/Login';
import Home from '../views/Home';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  
  return (
    
      <Routes>
        {/* Pagina Home */}
        <Route exact path="/" element={<Home/>} />
        {/* Pagina Login */}
        <Route path="/login" element={<Login/>} />
        {/* Pagina Lista Studenti */}
        <Route path="/students" element={<StudentList/>} />
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

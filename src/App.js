import { Route, Routes } from 'react-router-dom';
import StudentList from './components/StudentList';
import StudentDetails from './components/StudentDetails';
import StudentCreate from './components/StudentCreate';
import StudentUpdate from './components/StudentUpdate';
import Login from './components/Login';
import Home from './components/Home';

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

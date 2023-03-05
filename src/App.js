import { Route, Routes } from 'react-router-dom';
import StudentList from './components/StudentList';
import Student from './components/Student';

function App() {
  
  return (
    
      <Routes>
        <Route exact path="/students" element={<StudentList/>} />
        <Route path="/students/:id" element={<Student/>} />
      </Routes>

  );
}

export default App;

import logo from './logo.svg';
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import QuestionAdd from './Pages/QuestionAdd';
import QuestionPaper from './Pages/QuestionPaper';
function App() {
  return (
    <div className="container App">
      <BrowserRouter>
      <Routes>
        <Route to="/" element={QuestionPaper}/>
        <Route to="/add" element={QuestionAdd}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

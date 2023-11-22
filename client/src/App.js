import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import QuestionAdd from './Pages/QuestionAdd';
import QuestionPaper from './Pages/QuestionPaper';
function App() {
  return (
    <div className="container App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<QuestionPaper/>}/>
        <Route path="/add" element={<QuestionAdd/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

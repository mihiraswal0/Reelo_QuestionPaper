import logo from './logo.svg';
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import QuestionAdd from './Pages/QuestionAdd';
import QuestionPaper from './Pages/QuestionPaper';
import Homepage from './Pages/Homepage';
function App() {
  return (
    <div className="container App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path='/generate' element={<QuestionPaper/>}/>
        <Route path="/add" element={<QuestionAdd/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

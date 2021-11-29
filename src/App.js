import './App.css';
import Details from './Components/Details';
import Header from './Components/Header';
import StudentInfo from './Pages/StudentInfo'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import StudentVerify from './Pages/StudentVerify';


function App() {
  return (
    <BrowserRouter className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Details/>} />
        <Route path="/studentverify" element={<StudentVerify />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

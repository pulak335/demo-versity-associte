import './App.css';
import Details from './Components/Details';
import Header from './Components/Header';
import StudentInfo from './Pages/StudentVerify'
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
        <Route path="/studentverify/:uniqeId" element={<StudentInfo />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

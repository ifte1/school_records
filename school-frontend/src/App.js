
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AddClass from './records/AddClass';
import Section from './pages/Section';
import AddSection from'./records/AddSection';
import Student from './pages/Student';
import AddStudent from './records/AddStudent'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path ='/'element={<Home/>}></Route>
        <Route exact path='/addclass'element={<AddClass/>}></Route>
        <Route exact path='/section/:id'element={<Section/>}></Route>
        <Route exact path='/student/:id'element={<Student/>}></Route>
        <Route exact path='/addsection/:id'element={<AddSection/>}></Route>
        <Route exact path='/addstudent/:id' element={<AddStudent/>}></Route>
      </Routes>

      </Router>
    
    </div>
  );
}

export default App;

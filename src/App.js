
import { Routes, Route } from 'react-router';
import './App.css';
import Home from './pages/Home/Home';
import Descriptioncomp from './components/DescriptionComp/DescriptionComp';
import Background from './components/background/Background';



function App() {

  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/background' element ={<Background/>} />
      <Route path='/description/:id' element={<Descriptioncomp/>}/>
     </Routes>
    </div>
  );
}

export default App;


import { Routes, Route } from 'react-router';
import './App.css';
import Home from './pages/Home/Home';
import Descriptioncomp from './components/DescriptionComp/DescriptionComp';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/description' element={<Descriptioncomp/>}/>
     </Routes>
    </div>
  );
}

export default App;

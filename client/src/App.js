import './App.css';
import { Route, Routes} from 'react-router-dom';
import {Landing,Home,Form, RecipeDetaild,Dietas} from './components/index.js';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Landing/> }/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/dietas' element={<Dietas/>}/>
      <Route path='/detail/:id' element={<RecipeDetaild/>}/>
    </Routes>
  );
}

export default App;

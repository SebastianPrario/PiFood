import './App.css';
import { Route, Routes} from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import Home from './components/Home/Home.jsx';
import Form from './components/Form/Form.jsx'
import RecipeDetaild from './components/RecipeDetail/RecipeDetail';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Welcome/> }/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/detail/:id' element={<RecipeDetaild/>}/>
    </Routes>
  );
}

export default App;

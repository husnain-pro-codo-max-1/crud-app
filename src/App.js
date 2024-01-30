import logo from './logo.svg';
import './App.css';
import Create from './Components/Create';
import {Routes , Route} from 'react-router-dom'
import Read from './Components/Read';
import Edit from './Components/Edit';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Read/>} exact> </Route>
        <Route path='/create' element={<Create/>} exact> </Route>
        <Route path='/edit' element={<Edit/>}></Route>
      </Routes>

    </div>
  );
}

export default App;

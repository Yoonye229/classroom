
import './App.css';

import Home from './Pages/Home'
import SignUp from './Pages/Signup';
import SignInSide from './Pages/Login'

import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
function App()
{
  return(
    <div class="App">
          
          <Router>
            <Routes>
              <Route path='/'element={<SignInSide/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/signup' element={<SignUp/>}/>
            </Routes>
          </Router>
        
     
    </div>
  )
}
export default App
 
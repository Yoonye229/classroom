
import './App.css';

import Home from './Pages/Home'
<<<<<<< HEAD
import SignUp from './Pages/Signup';
import SignInSide from './Pages/Login'
=======
//import SideBar from './components/SideBar'
>>>>>>> e8516f45fab7f3e599c5ac5a716ced1a8ee26d39

import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
function App()
{
  return(
    <div class="App">
          
          <Router>
<<<<<<< HEAD
            <Routes>
              <Route path='/'element={<SignInSide/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/signup' element={<SignUp/>}/>
            </Routes>
          </Router>
=======
            
            <Routes>
              <Route path='/' element={<Home/>}/>
              {/* <Route path='/AddClass' element={<AddClass/>}> </Route> */}
            </Routes> 
          </Router>
      
          
>>>>>>> e8516f45fab7f3e599c5ac5a716ced1a8ee26d39
        
     
    </div>
  )
}
export default App

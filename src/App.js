import Home from './Pages/Home'
import SignInSide from './Pages/Login'
import SignUp from './Pages/Signup'

import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
//import course pages

function App()
{
  return(
    <div class="App">
          
          <Router>
            <Routes>              
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<SignInSide/>}/>
              <Route path='/signup' element={<SignUp/>}/>
              
            </Routes>
          </Router>
        
     
    </div>
  )
}
export default App

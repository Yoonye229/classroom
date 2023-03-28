
import Home from './Pages/Home'

import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';

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

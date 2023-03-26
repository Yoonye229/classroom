
import Home from './Pages/Home'
import SignInSide from './Pages/Login'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';

function App()
{
  return(
    <div class="App">
          
          <Router>
            <Routes>
              
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<SignInSide/>}/>
            </Routes>
          </Router>
        
     
    </div>
  )
}
export default App


import './App.css';

import Home from './Pages/Home'
//import SideBar from './components/SideBar'

import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
function App()
{
  return(
    <div class="App">
          
          <Router>
            
            <Routes>
              <Route path='/' element={<Home/>}/>
              {/* <Route path='/AddClass' element={<AddClass/>}> </Route> */}
            </Routes> 
          </Router>
      
          
        
     
    </div>
  )
}
export default App

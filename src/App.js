
import './App.css';

import Home from './Pages/Home'
import SideBar from './components/SideBar';

import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
function App()
{
  return(
    <div class="App">
          
          <Router>
            <SideBar/>
            <Routes>
              <Route path='/'/>
            </Routes>
          </Router>
          <Home/> 
          <h1>aakpfhai</h1>
        
     
    </div>
  )
}
export default App
 
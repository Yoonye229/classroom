import Home from './Pages/Home'
import SignUp from './Pages/Signup'
import SignInSide from './Pages/Login'
import Courses from './components/Course/Courses'
import ProFile from './Pages/proFile'
import Course from './components/Course/Course'
import MyCourse from './components/Course/MyCourse'
import EditCourse from './components/Course/EditCourse'
import DeleteCourse from './components/Course/DeleteCourse'


import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
//import course pages

function App()
{
  return(
    <div className="App">
          
          <Router>
            <Routes>              
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<SignInSide/>}/>
              <Route path='/signup' element={<SignUp/>}/>
              <Route path='/profile' element={<ProFile/>}/>  
              <Route path='/courses' element={<Courses/>}/>
              <Route path='/course' element={<Course/>}/>
              <Route path='/mycourse' element={<MyCourse/>}/>
              <Route path='/editcourse' element={<EditCourse/>}/>
              <Route path='/deletecourse' element={<DeleteCourse/>}/>
            </Routes>
          </Router>
        
     
    </div>
  )
}
export default App

import Home from './Pages/Home'
import SignUp from './Pages/Signup'
import SignInSide from './Pages/Login'
import Courses from './components/Course/Courses'
import ProFile from './Pages/proFile'
import Course from './components/Course/Course'
import MyCourse from './components/Course/MyCourse'
import EditCourse from './components/Course/EditCourse'
import DeleteCourse from './components/Course/DeleteCourse'
import Lesson from './components/Course/Lesson'
import ListLesson from './components/Course/ListLesson'
import SideBar from './components/Navbar/Navbar'
import  About from './Pages/About_us'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
//import course pages

function App()
{
  return(
    <div className="App">
         
          <Router>
            <SideBar/>
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
              <Route path='/lesson' element={<Lesson/>}></Route>
              <Route path='/listlesson' element={<ListLesson/>}></Route>
              <Route path='/aboutus' element={<About/>}></Route>
            </Routes>
          </Router>
        
     
    </div>
  )
}
export default App

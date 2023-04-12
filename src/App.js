import Home from './Pages/Home';
import SignInSide from './Pages/Login';
import SignUp from './Pages/Signup';
import Profile from './Pages/ProFile';
import AboutUs from './Pages/About_us';
import Course from './components/Course/Course';
import Courses from './components/Course/Courses';
import MyCourse from './components/Course/MyCourse';
import EditCourse from './components/Course/EditCourse';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Banner/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import course pages

function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignInSide />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/course/:id" element={<Course />} />
          <Route path="/editcourse" element={<EditCourse />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/mycourse" element={<MyCourse />} />
        </Routes>
        <div className="footer">
          <Footer/>
        </div>
      </Router>
    </div>
  );
}
export default App;

import Home from './Pages/Home';
import SignInSide from './Pages/Login';
import SignUp from './Pages/Signup';
import Profile from './Pages/ProFile';
import AboutUs from './Pages/About_us';
import Courses from './components/Course/Courses'
import Navbar from './components/Navbar/Navbar';
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
          <Route path="/profile" element={<Profile />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path='/courses' element={<Courses/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;

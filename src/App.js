import Home from './Pages/Home';
import SignInSide from './Pages/Login';
import SignUp from './Pages/Signup';
// import Profile from './Pages/ProFile'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import course pages

function App() {
  return (
    <div class="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignInSide />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path='/profile' element={<Profile/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}
export default App;

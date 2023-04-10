import React , {useState , useEffect} from 'react'
import './css/Courses.css'
import Button from '../Buttons/ButtonAddClass'
import * as MdIcons from "react-icons/md";
const Courses = () => {
  const [avatar, setAvatar] = useState();
  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);
  const handlePreviewAvatar = (e) => {
      const file = e.target.files[0];
      file.preview = URL.createObjectURL(file);

      setAvatar(file);
  }

  
  //Fetch data        
  const [courses, setCourses] = useState(null)

  useEffect(() => {
    const fetchCourse = async() =>{
      const response = await fetch('/api/course/')
      const json = await response.json()

      if(response.ok){
        setCourses(json);
      }
    }
    fetchCourse()
  },[])

  
return (
  <>
    <Button/>
  <div className='full'>
     
    
  <div className="courses_full">
   
      { courses && courses.map((course) =>(
      <div className='courses' id='courses' key={course._id}> 
        <div className="courses-head">
          <label><strong> Ten lop: </strong>{course.coursename}</label>
          <label><strong> Mo ta: </strong>{course.desc}</label>
        </div>
        <div className="courses-img">
      <input type={"file"} className="myfile1" onChange={handlePreviewAvatar}/>
      {avatar && (
      <img src={avatar.preview} alt=""     />)}
      
            </div>
    
      <div className="courses-body">
          <label> thong bao</label>
      </div>
    
    <div className='line'></div>
        <div className='courses-footer'>
          <button id='homework'>
          <MdIcons.MdOutlineHomeWork className='iconourse'/>
          </button>
        </div>
      </div>
      ))}
      { !courses &&
        <div className='loading'></div>
      }
    </div>
    </div>
  </>
  
);
};

export default Courses;







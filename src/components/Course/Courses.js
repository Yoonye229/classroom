import React , {useState , useEffect} from 'react'
import './css/Courses.css'
import * as MdIcons from "react-icons/md";
const Courses = () => {
  const [avatar,setAvatar] = useState()
  useEffect(()=>{
      return ()=>{
            avatar &&  URL.revokeObjectURL(avatar.preview)
      }
  },[avatar])
  const handlePreviewAvatar = (e) =>{
      const file = e.target.files[0]
      file.preview = URL.createObjectURL(file)
      
      setAvatar(file)

  }
  const handleClick = () =>{
    window.location.href = "/course";
  }

  
return (
  <div className="courses-full">
  <div className="courses" id='courses' onClick={handleClick}>
    <div className='courses-head'>
  
        <label id='nameclass'>Tên lop </label>
        <label id='nameteacher'>Giao vien </label>
        
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
  </div>
);
};

export default Courses;







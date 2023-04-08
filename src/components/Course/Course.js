import React, {useState}  from 'react'
import './css/Course.css'
import * as IoIcons from "react-icons/io";
import Dropdown from 'react-bootstrap/Dropdown';
import EditCourse  from './EditCourse';
import DeleteCourse  from './DeleteCourse';
const Course = () => {
  const handleClick =()=>
{
    window.location.href = '/mycourse'
} 
const Deleteitem =()=>
{
  
}
const [popup, setPop] = useState(false);
  const clickButton = () => {
    setPop(!popup);
  };
  return (
    <div className='course'>
      <div className='course-head'>
        <div className='course-name'>
        
        <label id='nameclass'>Tên lop </label>
        <label id='nameteacher'>Giao vien </label>
        </div>
        <div className='btnEdit'>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Tùy Chỉnh
      </Dropdown.Toggle>
      <EditCourse/>
      <Dropdown.Menu className='dropmenu'>
        <Dropdown.Item className='dropitem' > 
        <div id="retail" onClick={clickButton} data-toggle="modal" data-target="#exampleModalCenter">
        Chỉnh sửa
      </div> </Dropdown.Item>
        
        <div className='line'></div>
        <Dropdown.Item className='dropitem' onClick={Deleteitem} > Xóa </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>
      </div>
      <div className='course-body'>
        <div className='course-right'>
          <div className='comment'>
            <input type="text" name="class_name" required="" />
              <label htmlFor=""> Thông báo nội dung bài học</label>
          </div>
          <div className='body-course' onClick={handleClick}>
            <div>
              <IoIcons.IoMdListBox className='iconclass'/>
            </div>
          <div className='work'>
            
              <label id='Teacher'><span>NameTeacher </span> : <span> nameHomework</span></label>
              
              
              <label id='Date'><span>date</span></label>
             
          </div>
           
        </div>
        </div>
        <div className='course-left'>
          <label id='malop'>
            Mã lớp : 
          </label>
        </div>
      </div>
    </div>
  )
}

export default Course

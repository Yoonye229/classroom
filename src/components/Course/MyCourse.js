import React from 'react'
import * as IoIcons from "react-icons/io";
import * as CiIcons from "react-icons/bs";
import './css/MyCourse.css'
import NewLesson from './NewLesson';
const MyCourse = () => {
  const handleClick = () =>{
    window.location.href = "/lesson";
  }
  
  return (
    <div className='mycourse'>
      <div className='mycourse-left'>
          <div className='mycourse-left-head'>
            <div className='mycourse-head'>
          <div>
              <IoIcons.IoMdListBox className='iconclass'/>
            </div>
          <div className='work'>
            
              <label id='Teacher'><span>NameTeacher </span> </label>
              
              
              <label id='=Hwork'><span> nameHomework</span></label>
              <label><span>Deadline</span> </label>
              </div>
              </div>
              <div className='editwork'>
                   <NewLesson/>
              </div>
          </div>
          <div className='line'></div>
          <div className='mycourse-left-body'>
            <label>BaiTap</label>
          </div>
          <div className='line'></div>
          <div className='mycourse-left-foot'>
            <label>Nhan xet</label>
          </div>
      </div>
      <div className='mycourse-right'>
        <div className='mycourse-right-head'>
        <div className='mycourse-right-bor'>
        <h3>Bài tập</h3>
        <div onClick={handleClick}>
        <CiIcons.BsFillMenuButtonWideFill className='btnList '/>
        </div>
        </div>
        <button className='btnComplete'>
         <span>Nộp</span> </button>
        </div>
      </div>
    </div>
  )
}

export default MyCourse

import React from 'react'
import * as IoIcons from "react-icons/io";
import './css/MyCourse.css'

const MyCourse = () => {
  return (
    <div className='mycourse'>
      <div className='mycourse-left'>
          <div className='mycourse-left-head'>
          <div>
              <IoIcons.IoMdListBox className='iconclass'/>
            </div>
          <div className='work'>
            
              <label id='Teacher'><span>NameTeacher </span> </label>
              
              
              <label id='=Hwork'><span> nameHomework</span></label>
              <label><span>Deadline</span> </label>
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
        <div className='mycourse-right-bor'>
        <h2>Bài tập</h2>
        <button className='btnComplete'>
         <span>Nộp</span> </button>
        </div>
      </div>
    </div>
  )
}

export default MyCourse

import React from 'react'
import './css/Lesson.css'
const Lesson = () => {



  return (
    <div className='listwork'>
        <div className='listwork-left'>
          <div>
            <p>Danh sách sinh viên đã nộp</p>
            </div>
           
            <div>
            <label><span>name</span></label>
            </div>
        </div>
        <div className='listwork-right'>
            <label><span>folder</span></label>
        </div>
    </div>
  )
}

export default Lesson

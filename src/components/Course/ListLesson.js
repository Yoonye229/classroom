import React from 'react'
import './css/ListLesson.css'
import * as IoIcons from 'react-icons/io'
const ListLesson = () => {
    const handleClick =()=>
    {
        window.location.href = '/mycourse'
    } 
  return (
    <div className='leeson-full'>
        <h1> Danh sách </h1>
         <div className='lesson-body' onClick={handleClick}>
      <div className='work-lesson'>
        
             <div>
              <IoIcons.IoMdListBox className='iconclass'/>
            </div>
            <div className='body-lesson'>
            <label id='Teacher'><span>NameTeacher </span> : <span> nameHomework</span></label>
            <label id='Date'><span>date</span></label>
            </div>
        </div>
    </div>
    
    </div>
  )
}

export default ListLesson

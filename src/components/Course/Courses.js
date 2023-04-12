import React, { useState, useEffect } from 'react';
import './css/Courses.css';
import Button from '../Buttons/ButtonAddClass';
import { Link } from 'react-router-dom';
// import {useCourseContext} from '../../hooks/useCourseContext'
import * as MdIcons from 'react-icons/md';
import { useCourseContext } from '../../hooks/useCourseContext';

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
  };

  //Fetch data
  const {courses, dispatch} = useCourseContext();

  useEffect(() => {
    const fetchCourse = async () => {
      const response = await fetch('/api/course/');
      const json = await response.json();

      if (response.ok) {
        dispatch({type: 'GET', payload: json})
      }
    };
    fetchCourse();
  }, [dispatch]);

  return (
    <div>
      <Button />
      {/* <div className='searchwrap'>
        <input
          placeholder='Tìm key lớp học'
          className='searchbar'
        />
      </div> */}
      <div className="full">
        <div className="courses_full" >
        {courses &&
          courses.map((course) => (
            
              <div className="courses" id="courses" key={course._id}>
                <div className="courses-head">
                  <Link
                    to={ `/course/${course._id}`}
                  >
                    <label>
                      <strong> Ten lop: </strong>
                      {course.coursename}
                    </label>
                  </Link>
                  <label>
                    <strong> Mo ta: </strong>
                    {course.desc}
                  </label>
                </div>
                <div className="courses-img">
                  <input
                    type={'file'}
                    className="myfile1"
                    onChange={handlePreviewAvatar}
                  />
                  {avatar && <img src={avatar.preview} alt="" />}
                </div>

                <div className="courses-body">
                  <label> thong bao</label>
                </div>

                <div className="line"></div>
                <div className="courses-footer">
                  <button id="homework">
                    <MdIcons.MdOutlineHomeWork className="iconourse" />
                  </button>
                </div>
              </div>
            
          ))}
        {!courses && <div className="loading"></div>}
        </div>
      </div>
    </div>
  );
};

export default Courses;

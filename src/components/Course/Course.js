import React from 'react';
import './css/Course.css';
import * as IoIcons from 'react-icons/io';

const Course = () => {
  const handleClick = () => {
    window.location.href = '/mycourse';
  };
  return (
    <div className="course">
      <div className="course-head">
        <label id="nameclass">Tên lop </label>
        <label id="nameteacher">Giao vien </label>
      </div>
      <div className="course-body">
        <div className="course-right">
          <div className="comment">
            <input type="text" name="class_name" required="" />
            <label for=""> Thông báo nội dung bài học</label>
          </div>
          <div className="body-course" onClick={handleClick}>
            <div>
              <IoIcons.IoMdListBox className="iconclass" />
            </div>
            <div className="work">
              <label id="Teacher">
                <span>NameTeacher </span> : <span> nameHomework</span>
              </label>

              <label id="Date">
                <span>date</span>
              </label>
            </div>
          </div>
        </div>
        <div className="course-left">
          <label id="malop">Mã lớp :</label>
        </div>
      </div>
    </div>
  );
};

export default Course;

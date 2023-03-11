//Hiển thị thông tin một lớp học bằng react với tên lớp , sĩ số , học sinh lấy từ API server lên

import React, { useState, useEffect } from 'react';

const ClassInfo = () => {
  const [className, setClassName] = useState('');
  const [studentNumber, setStudentNumber] = useState(0);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://example.com/api/class')
      .then((response) => response.json())
      .then((data) => {
        setClassName(data.name);
        setStudentNumber(data.numberOfStudents);
        setStudents(data.students);
      }); 
  }, []);

  return (  
    <div>  
      <h2>Class Information</h2>  
      <p>Class Name: {className}</p>  
      <p>Number of Students: {studentNumber}</p>  

      <h3>Students List</h3>  

      <ul>  
        {students.map((student) => (  
          <li key={student.id}>{student.name}</li>  
        ))}  

      </ul>  

    </div>  

  );  };  export default ClassInfo;
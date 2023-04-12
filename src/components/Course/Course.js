import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as IoIcons from 'react-icons/io';
import Dropdown from 'react-bootstrap/Dropdown';
import EditCourse from './EditCourse';
import {DeleteCourse} from '../../hooks/useCRUDCourse'
import './css/Course.css';
import { useCourseContext } from '../../hooks/useCourseContext';
// import DeleteCourse  from './DeleteCourse';

const Course = () => {
  const { dispatch } = useCourseContext;
  const [course, setCourse] = useState(null)
  const params = useParams()
  const id = params.id
  useEffect(() => {
    const fetchcourse = async () =>{
      const response = await fetch('/api/course/'+id, {
        method: 'GET',
      });
      const json = await response.json()

      if(response.ok){
        setCourse(json)
        dispatch({type: 'GETONE', payload: json})
      }
    };
    fetchcourse()
  
  },[dispatch, id])

  //DELETE
  const [isDelete, setIsDelete] = useState() 
  const {deleteCourse, error} = DeleteCourse()
  const handlerDelete = async () => {
    const state = deleteCourse(id)
    setIsDelete(state)
  }

  // const [products, setProducts] = useState();

  //You can put all product information into diaglog
  // const [dialog, setDialog] = useState({
  //   message: "",
  //   isLoading: false,
  //   //Update
  //   nameProduct: ""
  // });
  // const idProductRef = useRef();
  // const handleDialog = (message, isLoading, nameProduct) => {
  //   setDialog({
  //     message,
  //     isLoading,
  //     //Update
  //     nameProduct
  //   });
  // };

  // const areUSureDelete = (choose) => {
  //   if (choose) {
  //     setProducts(products.filter((p) => p.id !== idProductRef.current));
  //     handleDialog("", false);
  //   } else {
  //     handleDialog("", false);
  //   }
  // };
  const [popup, setPop] = useState(false);
  const clickButton = () => {
    setPop(!popup);
  };
  
  return (
    <div className="course">
      {course && 
      <div className="course-head">
        <div className="course-name">
          <label id="nameclass">
            <strong>Tên lop : </strong> {course.coursename}
          </label>
          <label id="nameteacher">
            <strong>Mo ta: </strong> {course.desc}
          </label>
        </div>
        <div className="btnEdit">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Tùy Chỉnh
            </Dropdown.Toggle>
            <EditCourse />
            <Dropdown.Menu className="dropmenu">
              <Dropdown.Item className="dropitem">
                <div
                  id="retail"
                  onClick={clickButton}
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  Chỉnh sửa
                </div>{' '}
              </Dropdown.Item>

              <div className="line"></div>
              <Dropdown.Item className="dropitem" value={isDelete} onClick={handlerDelete}>
                {' '}
                Xóa{' '}
                {error && <span>Khong xoa duoc</span>}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      }
      <div className="course-body">
        <div className="course-right">
          <div className="comment">
            <input type="text" name="class_name" required="" />
            <label htmlFor=""> Thông báo nội dung bài học</label>
          </div>
          <div className="body-course" >
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
        {course && <div className="course-left">
          <label id="malop">Mã lớp :<strong>{course.coursekey}</strong></label>
        </div>}
      </div>
    </div>
  );
};

export default Course;

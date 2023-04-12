import { Button } from '@mui/material';
import React, { useState } from 'react';
import './css/ButtonAdd.css';
import * as GrIcons from 'react-icons/gr';
import { useCreateCourse } from '../../hooks/useCRUDCourse';

function AddCourseButton() {
  const [popup, setPop] = useState(false);
  const clickButton = () => {
    setPop(!popup);
  };
  const { create, isloading, error } = useCreateCourse();
  const [coursename, setCourseName] = useState('');
  const [coursekey, setCourseKey] = useState('');
  const [desc, setDesc] = useState('');

  const createCourse = async () => {
    await create(coursename, coursekey, desc)
      .catch(error)
      .finally(alert(`Lớp ${coursename} đã được tạo`));
  };

  return (
    <>
      <div className="a">
        <Button
          id="add"
          onClick={clickButton}
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          <GrIcons.GrFormAdd />
        </Button>

        <div
          className="modal fade"
          id="exampleModalCenter"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <form onSubmit={createCourse}>
                <div>
                  <div className="popup-header">
                    <h4>Thêm mới lớp học</h4>
                  </div>
                  <div className="User">
                    <input
                      type="text"
                      onChange={(e) => setCourseName(e.target.value)}
                      value={coursename}
                    />
                    <label htmlFor=""> Tên lớp</label>
                    <div className="Class">
                      <input
                        type="text"
                        name="num_students"
                        onChange={(e) => setDesc(e.target.value)}
                        value={desc}
                      />
                      <label htmlFor="">Mô tả</label>
                    </div>
                    <div className="Teacher">
                      <input
                        name="description"
                        type="text"
                        onChange={(e) => setCourseKey(e.target.value)}
                        value={coursekey}
                      ></input>
                      <label htmlFor="">Key</label>
                    </div>
                  </div>
                  <button className="btnAdd" type="submit" disabled={isloading}>
                    Tạo
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer"></div>
        </div>
      </div>
    </>
  );
}
export default AddCourseButton;
// tạo function click button chạy qua trang AddClass.js

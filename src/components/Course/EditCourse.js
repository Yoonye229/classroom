import { Button } from "@mui/material";
import React, { useState } from "react";
import './css/EditCourse.css'
import * as GrIcons from "react-icons/gr";
import { SpatialTracking } from "@mui/icons-material";
function EditCourse() {


 

  return (
    <div className="App">
      
     
      <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
     
      <div>
        
   
          
            <div className="popup-header">
              <h4>Chỉnh sửa lớp học</h4>
            </div>
            <div className="User">
              <input type="text" name="class_name" required="" />
              <label htmlFor=""> Tên lớp</label>
              <div className="Teacher">
                <input name="description" type="text"></input>
                <label htmlFor="">Giảng viên hướng dẫn</label>
              </div>
              <div className="malop">
              <input name="description" type="text"></input>
                <label htmlFor="">Mã lớp</label>
              </div>
            </div>
            <button className="btnAdd">Thay đổi</button>
          </div>
        
      </div>
      </div>
      <div className="modal-footer">
        
      </div>
    </div>
  </div>

    
  );
}
export default EditCourse;
// tạo function click button chạy qua trang AddClass.js

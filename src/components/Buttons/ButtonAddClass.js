import { Button } from "@mui/material";
import React, { useState } from "react";
import "./css/ButtonAdd.css";
import * as GrIcons from "react-icons/gr";
import { SpatialTracking } from "@mui/icons-material";
function AddCourseButton() {
  const [popup, setPop] = useState(false);
  const clickButton = () => {
    setPop(!popup);
  };

  // window.location.href="/AddClass";

  return (
    <div className="App">
      <Button id="add" onClick={clickButton} data-toggle="modal" data-target="#exampleModalCenter">
        <GrIcons.GrFormAdd />
      </Button>
     
      <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
     
      <div>
        
   
          
            <div className="popup-header">
              <h4>Thêm mới lớp học</h4>
            </div>
            <div className="User">
              <input type="text" name="class_name" required="" />
              <label for=""> Tên lớp</label>
              <div className="Class">
                <input type="text" name="num_students" />
                <label for="">Sĩ số</label>
              </div>
              <div className="Teacher">
                <input name="description" type="text"></input>
                <label for="">Giảng viên hướng dẫn</label>
              </div>
            </div>
            <button className="btnAdd">Tạo</button>
          </div>
        
      </div>
      </div>
      <div class="modal-footer">
        
      </div>
    </div>
  </div>

    
  );
}
export default AddCourseButton;
// tạo function click button chạy qua trang AddClass.js

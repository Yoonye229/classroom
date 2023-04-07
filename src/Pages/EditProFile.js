import { Button } from "@mui/material";
import React, { useState } from "react";
import "../components/Sidebara/css/ButtonAdd.css";
import * as GrIcons from "react-icons/gr";

function Edit() {
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
              <h4>Thay đổi thông tin</h4>
            </div>
            <div className="User">
              <input type="text" name="class_name" required="" />
              <label for=""> Tên </label>
              <div className="Class">
                <input type="text" name="num_students" />
                <label for="">email</label>
              </div>
              </div>
              <div className="Teacher">
                <input name="description" type="text"></input>
                <label for="">Mật khẩu</label>
              </div>
            </div>
            <button className="btnAdd">Thay đổi</button>
          </div>
        
      </div>
      </div>
      <div class="modal-footer">
        
      </div>
    </div>

    
  );
}
export default Edit;
// tạo function click button chạy qua trang AddClass.js

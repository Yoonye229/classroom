
import React, { useState } from "react";
import './css/EditCourse.css'
import * as AiIcons from "react-icons/ai"
function NewLesson() {
  const [popup, setPop] = useState(false);
  const clickButton = () => {
    setPop(!popup);
  };

 

  return (
    <div className="App">
      <div id="retail" onClick={clickButton} data-toggle="modal" data-target="#exampleModalCenter">
      <AiIcons.AiOutlineEdit className='editw'/>
      </div>
     
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
              <h4>Thêm bài tập</h4>
            </div>
            <div className="User">
              <input type="text" name="class_name" required="" />
              <label htmlFor=""> Tên tiêu đề</label>
              <div className="Teacher">
                <input name="description" type="textarea"></input>
                <label htmlFor="">Bài tập</label>
              </div>
              <div className="malop">
              <input name="description" type="text"></input>
                <label htmlFor="">Thời hạn</label>
              </div>
            </div>
            <button className="btnAdd">Thêm</button>
          </div>
        
      </div>
      </div>
      <div className="modal-footer">
        
      </div>
    </div>
  </div>

    
  );
}
export default NewLesson;
// tạo function click button chạy qua trang AddClass.js

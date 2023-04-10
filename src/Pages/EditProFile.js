import { Button } from "@mui/material";
import React, { useState } from "react";
import "./css/EditProfile.css";
import { useAuthContext } from "../hooks/useAuthContext";
import useProfile from '../hooks/userHook';

function Edit() {
  const [popup, setPop] = useState(false);
  const { user } = useAuthContext()

  const [firstname, setFirstname] = useState(user.firstname)
  const [educator, setEducator] = useState(user.educator)

  const clickButton = () => {
    setPop(!popup);
  };
  
  const {profile, isloading, error} = useProfile()
  const handlerEdit = async (e) =>{
    // e.preventDefault()
    // await profile.editprofile(id, firstname, educator)
    console.log(user.educator);
  }
  return (
    <div className="App">
      <Button id="addProfile" onClick={clickButton} data-toggle="modal" data-target="#exampleModalCenter" >
      Chỉnh sửa
      </Button>
     
      <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
     
      <div >
            <div className="popup-header">
              <h4>Thay đổi thông tin</h4>
            </div>
            <div className="User">
              <input type="text" placeholder={firstname} value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
              <label> Tên </label>
              </div>
              <div className="Teacher">
                {user.educator ?  
                <select className="educator" value={educator} >
                    <option>Giáo viên</option>
                    <option>Học viên</option>
                </select>
                :<select className="educator" value={educator} onChange={(e) => setEducator(e.target.value)}>
                    <option>Học viên</option>
                    <option>Giáo viên </option>
                </select>
                }
                {error && <span>{error}</span>}
              </div>
              <button className="btnAdd" onClick={handlerEdit}  disabled={isloading} >Thay đổi</button>
      </div>
            
          </div>
        
      </div>
      </div>
      <div className="modal-footer">
        
      </div>
    </div>

    
  );
}
export default Edit;
// tạo function click button chạy qua trang AddClass.js
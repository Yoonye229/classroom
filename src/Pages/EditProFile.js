import { Button } from '@mui/material';
import React, { useState } from 'react';
import './css/EditProfile.css';
import useProfile from '../hooks/userHook';
import { useAuthContext } from '../hooks/useAuthContext';

function Edit(props) {
  const [popup, setPop] = useState(false);
  const {dispatch} = useAuthContext()
  const [firstname, setFirstname] = useState();
  const [educator, setEducator] = useState();

  const { profile } = useProfile();
  const clickButton = () => {
    setPop(!popup);
  };
  const handlerSunmit = async () => {
  
    const response = await fetch(`api/user/:${props.user.id}`, {
      method: 'PATCH',
    });
    const json = response.json();
    
    if (response.ok) {
      dispatch({ type: 'UPDATE', payload: json });
      setFirstname(json)
      setEducator(json)
    }
  }
    
  
  return (
    <form className="App">
      <Button
        id="addProfile"
        onClick={clickButton}
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Chỉnh sửa
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

            <form onSubmit={handlerSunmit} >
              <div className="popup-header">
                <h4>Thay đổi thông tin</h4>
              </div>
              <div className="User">
                <input
                  type="text"
                  placeholder={firstname}
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <label> Tên </label>
              </div>
              <div className="Teacher">
                {props.user.educator ? (
                  <select className="educator" value={educator}>
                    <option>Giáo viên</option>
                    <option>Học viên</option>
                  </select>
                ) : (
                  <select
                    className="educator"
                    value={educator}
                    onChange={(e) => setEducator(e.target.value)}
                  >
                    <option>Học viên</option>
                    <option>Giáo viên </option>
                  </select>
                )}
              </div>
              <button className="btnAdd" type="submit">
                Thay đổi
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="modal-footer"></div>
    </form>
  );
}
export default Edit;
// tạo function click button chạy qua trang AddClass.js

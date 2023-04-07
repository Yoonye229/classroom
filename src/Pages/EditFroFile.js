import { Button } from '@mui/material';
import React, { useState } from 'react';
import '../components/Sidebara/css/ButtonAdd.css';

function Edit() {
  const [popup, setPop] = useState(false);
  const clickButton = () => {
    setPop(!popup);
  };

  // window.location.href="/AddClass";

  return (
    <div className="App">
      <Button
        id="add"
        onClick={clickButton}
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        <input
          type="submit"
          className="profile-edit-btn"
          name="btnAddmore"
          value={'Edit'}
        />
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

            <div>
              <div className="popup-header">
                <h4>Thay đổi thông tin</h4>
              </div>
              <div className="Avatar">
                <input type="folder" name="user-avatar" />
                <label for="">Ảnh đại diện</label>
                <div className="Name">
                  <input type="text" name="user-name" />
                  <label for="">Tên</label>
                </div>
              </div>
              <div className="Password">
                <input name="description" type="password"></input>
                <label for="">Mật khẩu</label>
              </div>
              <div className="Role">
                <input name="role" type="text"></input>
                <label for="">Vai trò</label>
              </div>
            </div>
            <button className="btnAdd">Thay đổi</button>
          </div>
        </div>
      </div>
      <div className="modal-footer"></div>
    </div>
  );
}
export default Edit;
// tạo function click button chạy qua trang AddClass.js

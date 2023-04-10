import Edit from './EditProFile';
import "./css/ProFile.css";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from 'react';
     
const Profile = () => {
  const { user } = useAuthContext()
  //handler view & change avatar
  
  //handler show api

  return (
    <div className="border">
    {user &&
    <div className="profile">
      <div className="profile-head">
           <div>{user.avatar}</div>
      </div>
      <form method="">
         <div className="profile-body">
            <h1>Thông tin cá nhân</h1>
          <p>Tên: {user.firstname}</p>
          <p>Email: {user.email}</p>
          <p>Chức vụ: {user.educator? "Giáo viên" : "Học sinh"}</p>
        </div>
      </form> 
      <div className="col-md-2">
        {user &&<Edit/>}
      </div>
    </div>
    }
    </div>
  );
};

export default Profile;
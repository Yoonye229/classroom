import React, { useEffect, useState } from "react";
import Edit from './EditProFile';
import "./css/ProFile.css";

     
const Profile = () => {
    const [avatar,setAvatar] = useState()
    useEffect(()=>{
        return ()=>{
              avatar &&  URL.revokeObjectURL(avatar.preview)
        }
    },[avatar])
    const handlePreviewAvatar = (e) =>{
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        
        setAvatar(file)
    }
  return (
    <div className="border">
    <div className="profile">
      <div class="profile-head">
        <input type={"file"} className="myfile" onChange={handlePreviewAvatar}/>
        {avatar && (
        <img src={avatar.preview} alt=""     />)}
        
              </div>
      <form method="">
        <div className="profile-body">
            <h1>Thông tin cá nhân</h1>
          <p>Tên: example_user</p>
          <p>Ngày Sinh: John Smith</p>
          <p>Giới tính: Here's a brief description about me.</p>
        </div>
      </form>
      <div className="col-md-2">
           
           <Edit/>
      </div>
    </div>
    </div>
  );
};

export default Profile;

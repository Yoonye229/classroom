import Edit from './EditProFile';
import './css/ProFile.css';
import { useAuthContext } from '../hooks/useAuthContext';
import useProfile from '../hooks/userHook';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
// import { useState } from 'react';

const Profile = () => {
   //handler view & change avatar
  const [firstname, setFirstname] = useState()
  const [educator, setEducator] = useState()
  const [avatar, setAvatar] = useState()
  const handlerChange = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
  }
  const { user } = useAuthContext();
  const { profile } = useProfile();
  const params = useParams()
  const id = params.id
  //handler show api
  

  return (
    <div className="border">
      {user && 
        <div className="profile" key={user._id}>
          <div className="profile-head">
            <input type='file' className='avatar-section' value={avatar} onChange={handlerChange}/>
            <span>{user.avatar}</span>
          </div>
          <form method="">
            <div className="profile-body">
              <h1>Thông tin cá nhân</h1>
              <p>Tên: {user.firstname}</p>
              <p>Email: {user.email}</p>
              <p>Chức vụ: {user.educator ? 'Giáo viên' : 'Học sinh'}</p>
            </div>
          </form>
          <div className="col-md-2">
            
            <Edit user={user} />
          </div>
        </div>
      }
    </div>
  );
};

export default Profile;

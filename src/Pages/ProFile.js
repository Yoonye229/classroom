import React, { useEffect, useState } from 'react';
import Edit from './EditFroFile';
import './css/ProFile.css';
import useProfile from '../hooks/userHook';

const Profile = () => {
  const [avatar, setAvatar] = useState();
  const { profile, isloading, error } = useProfile();
  const [firstname, setFirstname] = useState(...profile);
  const [password, setPassword] = useState(...profile);
  const [educator, setEducator] = useState(...profile);

  const handleChange = async (e) => {
    e.preventdefault();

    const updateProfile = ({ changedProfile }) => {
      setFirstname(changedProfile);
      setEducator(changedProfile);
      setPassword(changedProfile);
    };
    return updateProfile;
  };
  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview);
    };
  }, [avatar]);
  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);

    setAvatar(file);
  };
  return (
    <div className="border">
      {profile &&
        profile.map((item) => {
          <div className="profile">
            <div className="profile-head">
              <input
                type={'file'}
                className="myfile"
                onChange={handlePreviewAvatar}
              />
              {avatar && <img src={avatar.preview} alt="user-avatar" />}
            </div>
            <form method="">
              <div className="profile-body">
                <h1>Thông tin cá nhân</h1>
                <p>Ten: {item.firstname}</p>
                <p>Mat khau: {item.password}</p>
                <p>Vai tro: {item.educator}</p>
              </div>
            </form>
            <div className="col-md-2">
              <Edit onChange={handleChange} />
            </div>
          </div>;
        })}
    </div>
  );
};

export default Profile;

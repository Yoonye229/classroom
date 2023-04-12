import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleCick = () => {
    logout();
  };

  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <h3 className="logo">MAPK</h3>

            <ul className="nav-links">
              <Link to="/">
                <li>Trang chủ</li>
              </Link>
              <Link to="/courses">
                <li>Lớp học</li>
              </Link>
              <Link to="/aboutus">
                <li>Team</li>
              </Link>
            </ul>

          <div className="nav-auth">
            {user && (
              <div>
                <button onClick={handleCick}>Đăng xuất</button>
                <Link to={`/profile/${user._id}`}>
                  <span>{user.email}</span>
                </Link>
              </div>
            )}
            {!user && (
              <div>
                <Link to="/login">
                  <button>Đăng nhập</button>
                </Link>
                <Link to="/signup">
                  <button>Đăng ký</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

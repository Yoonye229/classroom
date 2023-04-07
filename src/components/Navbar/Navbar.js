import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useProfile } from '../../hooks/userHook';

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleCick = () => {
    logout();
  };
  const findProfile = async (e) => {
    e.preventDefault();
    window.location.href = '/profile';
  };
  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <h3 className="logo">MAPK</h3>

          <ul className="nav-links">
            <Link>
              <li>Trang chủ</li>
            </Link>
            <Link>
              <li>Lớp học</li>
            </Link>
            <Link>
              <li>Bài tập</li>
            </Link>
            <Link>
              <li>Team</li>
            </Link>
          </ul>
          <div className="nav-auth">
            {user && (
              <div>
                <span onClick={findProfile}>{user.email}</span>
                <Link>
                  <button onClick={handleCick}>Đăng xuất</button>
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

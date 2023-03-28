import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    const [islogin, setIslogin] = useState(true)

    
    return(
        <header>
            <nav className='navbar'>
                <div className='container'>
                <h3 className='logo'>MAPK</h3>

                <ul className='nav-links'>
                    <Link><li>Trang chủ</li></Link>
                    <Link><li>Lớp học</li></Link>
                    <Link><li>Phòng họp</li></Link>
                    <Link><li>About ú</li></Link>
                </ul>

                <ul className='button'>
                    {islogin? <>
                        <Link to='/login'><li>Đăng nhập</li></Link>
                        <Link to='/signup'><li>Đăng ký</li></Link>
                    </>: 
                    <>
                        <Link><li>Đăng xuất</li></Link>
                    </>}                     
                </ul>
                </div>
                
            </nav>
        </header>
    )
}
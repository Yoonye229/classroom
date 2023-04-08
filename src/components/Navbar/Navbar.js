import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'
import Button from '../Buttons/ButtonAddClass'
import '../Sidebara/css/ButtonAdd.css'

export default function Navbar() {
    const {logout} = useLogout()
    const {user} = useAuthContext()
    
    const handleCick = () =>{
        logout();
    }
    return(
        
        <header>
            <nav className='navbar'>
                <div className='container'>
                    <h3 className='logo'>MAPK</h3>

                    <ul className='nav-links'>
                        <Link to='/home'><li>Trang chủ</li></Link>
                        <Link to='/courses'><li>Lớp học</li></Link>
                        <Link to='/listlesson'><li>Bài tập</li></Link>
                        <Link to='/aboutus'><li>Team</li></Link>
                    </ul>
                        {user && 
                        <div className='right-content'>
                            <Button/>
                            <span>{user.email}</span>
                            <Link><button onClick={handleCick}>Đăng xuất</button></Link>
                        </div>
                        }
                        {!user &&
                            <div className='right-content'>
                                <Link to='/login'><>Đăng nhập</></Link>
                                <Link to='/signup'><>Đăng ký</></Link>
                            </div>
                        } 
                        
                </div>
                
            </nav>
        </header>
        
 
    )
}
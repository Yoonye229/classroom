
import React ,{useState} from 'react'
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from 'react-icons/ai';
// import { Link } from 'react-router-dom';
import * as ImIcons from 'react-icons/im';

import { SidebarData } from './SidebarData';
import './css/SideBar.css';
// import { IconContext } from 'react-icons';
function SideBar() {
    const [isClosed, setIsClosed] = useState(false);
    const toggleOffCanvas = () => {
        const wrapper = document.querySelector("#wrapper");
        wrapper.classList.toggle("toggled");
        const overlay = document.querySelector(".overlay");
        const trigger = document.querySelector(".hamburger");

        if (isClosed) {
            overlay.style.display = "none";
            trigger.classList.remove("is-open");
            trigger.classList.add("is-closed");
            setIsClosed(false);
        } else {
            overlay.style.display = "block";
            trigger.classList.remove("is-closed");
            trigger.classList.add("is-open");
            setIsClosed(true);
        }
    };
    // const [sidebar,setSidebar] = useState(false)
    // const showSidebar = () =>setSidebar(!sidebar)
  return (
    <>
    
    <div id="wrapper">
            <div class="overlay"></div>

            <nav
                class="navbar navbar-inverse navbar-fixed-top"
                id="sidebar-wrapper"
                role="navigation"
            >
                <ul class="nav sidebar-nav">
                    <li class="sidebar-brand">
                        <a href="#">MPKA</a>
                    </li>
                    <li>
                        <a href="https://classroom.google.com/u/0/c/NTYwNDEzMDM0NDIw">Lớp Học</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Events</a>
                    </li>
                    <li>
                        <a href="#">Team</a>
                    </li>
                    <li class="dropdown">
                        <a
                            href="#"
                            class="dropdown-toggle"
                            data-toggle="dropdown"
                        >
                            Works <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                            <li class="dropdown-header">Dropdown heading</li>
                            <li>
                                <a href="#">Action</a>
                            </li>
                            <li>
                                <a href="#">Another action</a>
                            </li>
                            <li>
                                <a href="#">Something else here</a>
                            </li>
                            <li>
                                <a href="#">Separated link</a>
                            </li>
                            <li>
                                <a href="#">One more separated link</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>    
                        <a href="#">Contact</a>
                    </li>
                    <li>
                    
                        <a href="#"> <ImIcons.ImExit/>Đăng Xuất</a>
                    </li>
                </ul>
            </nav>

            <div id="page-content-wrapper">
                {/* <button
                    type="button"
                    class="hamburger is-closed"
                    data-toggle="offcanvas"
                    onClick={hamburgerCross}
                >
                    new
                </button>
                <button data-toggle="offcanvas" onClick={toggleOffCanvas}>
                    old
                </button> */}
                <button
                    type="button"
                    class="hamburger is-closed"
                    data-toggle="offcanvas"
                    onClick={toggleOffCanvas}
                >
                    <span class="hamb-top"></span>
                    <span class="hamb-middle"></span>
                    <span class="hamb-bottom"></span>
                </button>
               
            </div>
            <div></div>
        </div>
    </>
   
  )
}

export default SideBar

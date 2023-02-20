
import React ,{useState} from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './css/SideBar.css';
import { IconContext } from 'react-icons';
function SideBar() {
    const [sidebar,setSidebar] = useState(false)
    const showSidebar = () =>setSidebar(!sidebar)
  return (
    <>
    <IconContext.Provider value={{color:'black'}}>
     <div className='navbar'>
        <Link to="#" className='menu-bar'>
            <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
     </div> 
     <nav className={sidebar ? 'nav-menu-active':'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                {/* <li className='navbar-toggle'>
                    <Link to = "#" className='menu-bars'>
                        <AiIcons.AiOutlineClose />  
                    </Link> 
                </li> */}
                {SidebarData.map((item, index)=>{
                    return(
                        <li key={index} className={item.cName}>
                         <Link to={item.path}>
                             {item.icon}
                             <span>{item.title}</span>
                         </Link>
                        </li>
                    );
                })}
            </ul>
     </nav>
     </IconContext.Provider>
     <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </>
  )
}

export default SideBar

/* eslint-disable jsx-a11y/anchor-is-valid */

import SideBar from '../components/SideBar';
import React from 'react';
import Class from './Class'
import "../components/css/SideBar.css"
import "./css/Home.css"
import AddCourseButton from '../components/ButtonAddClass'
import { margin } from '@mui/system';
export default function Home() {


 return(
  <div>

  <div class="container">
    <div class="row">
      <nav class="navbar navbar-expand-lg navbar-light bg-light" > 
        <div class="container-fluid" >
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
      
          <div class="navbar-line" id="navbarSupportedContent">
            <ul class="navbar-navnew me-auto mb-2 mb-lg-0">
              <li class="nav-itemnew">
                <a class="nav-linknew active" aria-current="page" href="#">Bảng tin</a>
              </li>
              <li class="nav-itemnew">
                <a class="nav-linknew" href="#">Bài tập</a>
              </li>
        {/* <li class="nav-itemnew dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
              <li class="nav-itemnew">
                <a class="nav-linknew disabled" href="#" tabindex="-1" aria-disabled="true">Thành viên </a>
              </li>
            </ul>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */} 


         </div>
      <AddCourseButton/>
        </div>  
      </nav>

     </div>
     
     </div>
     <Class/>  
  </div>
               
                

  );
 
}


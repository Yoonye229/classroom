import React from 'react'
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
// import * as IoIcons from "react-icons/io";

export const SidebarData =[
    {
        title:'Lớp học',
        path:'/',
        icon : <AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Lịch',
        path:'/Lich',
        icon : <AiIcons.AiTwotoneCalendar/>,
        cName:'nav-text'
    },
    {
        title:'Việc cần làm',
        path:'/Done',
        icon : <BsIcons.BsAlarmFill/>,
        cName:'nav-text'
    },
]
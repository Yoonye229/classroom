import React, {useState ,useRef}  from 'react'
import './css/Course.css'
import * as IoIcons from "react-icons/io";
import Dropdown from 'react-bootstrap/Dropdown';
import EditCourse  from './EditCourse';
import DeleteCourse  from './DeleteCourse';
const data = [
  {
    id: 1,
    name: "IphoneX",
    img:
      "https://didongviet.vn/pub/media/catalog/product//i/p/iphone-x-mau-xam-didongviet.jpg"
  },
  {
    id: 2,
    name: "Samsung Fold",
    img:
      "https://images.samsung.com/pk/smartphones/galaxy-z-fold3-5g/buy/zfold3_carousel_mainsinglekv_mo.jpg"
  },
  {
    id: 3,
    name: "Laptop Gaming",
    img:
      "https://cdn.techzones.vn/Data/Sites/1/News/3285/techzones-nhung-mau-laptop-gaming-choi-game-co-tan-nhiet-tot-nhat-tren-thi-truong.jpg"
  }
];
const Course = () => {
  const handleClick =()=>
{
    window.location.href = '/mycourse'
} 
const [products, setProducts] = useState(data);

  //You can put all product information into diaglog
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
    //Update
    nameProduct: ""
  });
  const idProductRef = useRef();
  const handleDialog = (message, isLoading, nameProduct) => {
    setDialog({
      message,
      isLoading,
      //Update
      nameProduct
    });
  };

  const handleDelete = (id) => {
    //Update
    const index = data.findIndex((p) => p.id === id);

    handleDialog("Are you sure you want to delete?", true, data[index].name);
    idProductRef.current = id;
  };

  const areUSureDelete = (choose) => {
    if (choose) {
      setProducts(products.filter((p) => p.id !== idProductRef.current));
      handleDialog("", false);
    } else {
      handleDialog("", false);
    }
  };
const [popup, setPop] = useState(false);
  const clickButton = () => {
    setPop(!popup);
  };
  return (
    <div className='course'>
      <div className='course-head'>
        <div className='course-name'>
        
        <label id='nameclass'>Tên lop </label>
        <label id='nameteacher'>Giao vien </label>
        </div>
        <div className='btnEdit'>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Tùy Chỉnh
      </Dropdown.Toggle>
      <EditCourse/>
      <Dropdown.Menu className='dropmenu'>
        <Dropdown.Item className='dropitem' > 
        <div id="retail" onClick={clickButton} data-toggle="modal" data-target="#exampleModalCenter">
        Chỉnh sửa
      </div> </Dropdown.Item>
        
        <div className='line'></div>
        <Dropdown.Item className='dropitem' onClick={handleDelete} > Xóa </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>
      </div>
      <div className='course-body'>
        <div className='course-right'>
          <div className='comment'>
            <input type="text" name="class_name" required="" />
              <label htmlFor=""> Thông báo nội dung bài học</label>
          </div>
          <div className='body-course' onClick={handleClick}>
            <div>
              <IoIcons.IoMdListBox className='iconclass'/>
            </div>
          <div className='work'>
            
              <label id='Teacher'><span>NameTeacher </span> : <span> nameHomework</span></label>
              
              
              <label id='Date'><span>date</span></label>
             
          </div>
           
        </div>
        </div>
        <div className='course-left'>
          <label id='malop'>
            Mã lớp : 
          </label>
        </div>
      </div>
    </div>
  )
}

export default Course

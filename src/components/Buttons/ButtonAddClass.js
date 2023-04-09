import { Button } from "@mui/material";
import config from '../../config.json';
import { useNavigate ,useParams } from "react-router-dom";
import React, { useState , useEffect } from "react";
import '../Sidebara/css/ButtonAdd.css'
import * as GrIcons from "react-icons/gr";
import axios from "axios";
function AddCourseButton() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [popup, setPop] = useState(false);
  const [post, setPost] = useState({
    courename: " ",
    teacher: " ",
    coursekey:" ",
  });
  // const fetchPosts = async () => {
  //   const res = await axios.get(config.apiUrl);
  //   setCoursename(res.data);
  //   setTeachername(res.data);
  //   setCoursekey(res.data);
  // };

  useEffect(() => {
    if (!id) return;
    const fetchPost = async () => {
      const { data } = await axios.get(`${config.apiUrl}/${id}`);
      setPost(data);
    };
    fetchPost();
  }, []);
  const handleChange = (e) => {
    const postClone = { ...post };
    postClone[e.target.name] = e.target.value;
    setPost(postClone)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id === "new") {
      await axios.post(config.apiUrl, post);
      return navigate("/");
    } else {
      await axios.put(`${config.apiUrl}/${id}`, post);
      return navigate("/");
    }
  };
  const clickButton = () => {
    setPop(!popup);
  };

  // window.location.href="/AddClass";

  return (
    <div className="App">
      <Button id="add" onClick={clickButton} data-toggle="modal" data-target="#exampleModalCenter">
        <GrIcons.GrFormAdd />
      </Button>
     
      <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
     
      <div>
        
   
          
            <div className="popup-header">
              <h4>Thêm mới lớp học</h4>
            </div>
            <div className="User">
              <input type="text" name="class_name" required="" value={post.courename}
            onChange={(e) => setPost(e.target.value)} />
              <label htmlFor=""> Tên lớp</label>
           
              <div className="Teacher">
                <input name="description" type="text" value={post.teacher}
           onChange={(e) => setPost(e.target.value)}></input>
                <label htmlFor="">Giảng viên hướng dẫn</label>
              </div>
              <div className="malop">
              <input name="description" type="text" value={post.coursekey}
            onChange={(e) => setPost(e.target.value)} ></input>
                <label htmlFor="">Mã lớp</label>
              </div>
            </div>
            <button className="btnAdd" onClick={handleSubmit} >Tạo</button>
          </div>
        
      </div>
      </div>
      <div className="modal-footer">
        
      </div>
    </div>
  </div>

    
  );
}
export default AddCourseButton;
// tạo function click button chạy qua trang AddClass.js

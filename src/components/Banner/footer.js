import React from 'react'
import './footer.css'
import Map from '../Course/NewCourse'

const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Về chúng tôi</h6>
            <p className="text-justify"> <i>Toán lý hóa sinh sử địa lý ! </i> Học tập là học hành  Chúng tôi hỗ trợ các bạn 1 lớp học đầy tình cảm , 1 cuộc sống  chỉ thành công nếu kiến thức được tiếp thu , bài tập được nộp đủ và được sự quản lý bởi cái giáo viên uy tín ! Cả mới các bạn đã sử dụng phần mền của chúng tôi . By Trần Bình Minh </p>
            
          </div>

          <div className="col-xs-6 col-md-3 ">
            <h6>Mục</h6>
            <ul className="footer-links">
            <li> Trang chủ</li>
              <li> Lớp học</li>
              <li> Bài tập</li>
              <li> Team</li>
             
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Công ty </h6>
            <ul className="footer-links">
            <Map/>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text"> 
                
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
          
            </ul>
          </div>
        </div>
      </div>
</footer>
    </div>
  )
}

export default Footer
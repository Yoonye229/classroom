import React from 'react';
import './css/About_us.css';
import Khoa from '../assets/khoangu.jpg';
import TuanAnh from '../assets/tuanhanh.jpg';
import Minh from '../assets/tranminh.jpg';
import Phuoc from '../assets/Phuoc.jpg';
import * as AiIcons from 'react-icons/ai';
const AboutUs = () => {
  return (
    <div className="Nhom">
      <div class="card">
        <div class="box">
          <div class="img">
            <img src={Minh} />
          </div>
          <h2>
            Trần Bình Minh
            <br />
            <span>Sinh viên tiêu biểu</span>
          </h2>
          <p>Thích thì học ko thích thì học</p>
          <span>
            <ul>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100011051079834">
                  <i class="fa-brands fa-facebook" aria-hidden="true">
                    <AiIcons.AiFillFacebook />
                  </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-twitter" aria-hidden="true">
                    <AiIcons.AiFillTwitterSquare />
                  </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-google-plus" aria-hidden="true">
                    <AiIcons.AiFillGoogleSquare />
                  </i>
                </a>
              </li>

              <li>
                <a href="#">
                  <i class="fa-brands fa-instagram" aria-hidden="true">
                    <AiIcons.AiFillInstagram />
                  </i>
                </a>
              </li>
            </ul>
          </span>
        </div>
      </div>
      <div class="card">
        <div class="box">
          <div class="img">
            <img src={Phuoc} />
          </div>
          <h2>
            Nguyễn Hoàng Phước
            <br />
            <span>Sinh viên tiêu biểu</span>
          </h2>
          <p>Thích thì học ko thích thì học</p>
          <span>
            <ul>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100011051079834">
                  <i class="fa-brands fa-facebook" aria-hidden="true">
                    <AiIcons.AiFillFacebook />
                  </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-twitter" aria-hidden="true">
                    <AiIcons.AiFillTwitterSquare />
                  </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-google-plus" aria-hidden="true">
                    <AiIcons.AiFillGoogleSquare />
                  </i>
                </a>
              </li>

              <li>
                <a href="#">
                  <i class="fa-brands fa-instagram" aria-hidden="true">
                    <AiIcons.AiFillInstagram />
                  </i>
                </a>
              </li>
            </ul>
          </span>
        </div>
      </div>
      <div class="card">
        <div class="box">
          <div class="img">
            <img src={TuanAnh} />
          </div>
          <h2>
            Nguyễn Trần Tuấn Anh
            <br />
            <span>Sinh viên tiêu biểu</span>
          </h2>
          <p>Thích thì học ko thích thì học</p>
          <span>
            <ul>
              <li>
                <a href="https://www.facebook.com/profile.php?id=100011051079834">
                  <i class="fa-brands fa-facebook" aria-hidden="true">
                    <AiIcons.AiFillFacebook />
                  </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-twitter" aria-hidden="true">
                    <AiIcons.AiFillTwitterSquare />
                  </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-google-plus" aria-hidden="true">
                    <AiIcons.AiFillGoogleSquare />
                  </i>
                </a>
              </li>

              <li>
                <a href="#">
                  <i class="fa-brands fa-instagram" aria-hidden="true">
                    <AiIcons.AiFillInstagram />
                  </i>
                </a>
              </li>
            </ul>
          </span>
        </div>
      </div>
      <div class="card">
        <div class="box">
          <div class="img">
            <img src={Khoa} />
          </div>
          <h2>
            Nguyễn Trần Đăng Khoa
            <br />
            <span>Sinh viên tiêu biểu</span>
          </h2>
          <p>Sống ảo từng khoảng khắc</p>
          <span>
            <ul>
              <li>
                <a href="https://www.facebook.com/dangkhoa.981">
                  <i class="fa-brands fa-facebook">
                    <AiIcons.AiFillFacebook />
                  </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-twitter" aria-hidden="true">
                    <AiIcons.AiFillTwitterSquare />
                  </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa-brands fa-google-plus" aria-hidden="true">
                    <AiIcons.AiFillGoogleSquare />
                  </i>
                </a>
              </li>

              <li>
                <a href="#">
                  <i class="fa-brands fa-instagram" aria-hidden="true">
                    <AiIcons.AiFillInstagram />
                  </i>
                </a>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

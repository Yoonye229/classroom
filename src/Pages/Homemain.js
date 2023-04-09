import React from 'react'
import './css/Home.css'
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
const Homemain = () => {
  return (
    <div className='main'>
      
    <MDBCarousel showIndicators showControls fade >
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
        alt="..."
      >
        <h5>By : Trần Bình Minh</h5>
        <p>Học tập là hạnh phúc , kiến thức là bình yên.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
        alt="..."
      >
        <h5>By : Nguyễn Hoàng Phước</h5>
        <p>Không thử, không làm, không thành công.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
        alt="..."
      >
        <h5>By :Nguyễn Trần Tuấn Anh</h5>
        <p>
          Học ít hiểu nhiều , học nhiều không hiểu
        </p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={4}
        src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
        alt="..."
      >
        <h5>By :Nguyễn Trần Đăng Khoa</h5>
        <p>
          Học Học Học Học Học
        </p>
      </MDBCarouselItem>
    </MDBCarousel>
  );

    </div>
  )
}

export default Homemain

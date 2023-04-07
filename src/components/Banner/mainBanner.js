import { Link } from 'react-router-dom';
import './mainBanner.css';

const MainBanner = () => {
  return (
  
      <div className="hero">
        <h2>XIN CHÀO BẠN. HÃY BẮT ĐẦU HỌC CÙNG MAPK</h2>
        <h4>Hãy đăng nhập để sử dụng nhé!</h4>
        <Link to="/login">
          <button className="btn-login">ĐĂNG NHẬP</button>
        </Link>
      </div>
  
  );
}
export default MainBanner
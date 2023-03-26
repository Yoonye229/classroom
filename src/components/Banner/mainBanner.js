import { Link } from "react-router-dom";
import './mainBanner.css'

export default function MainBanner(){
    return(
        <div className="container">
            
            <image className="background" href='https://images.pexels.com/photos/5303549/pexels-photo-5303549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            
            <div className="hero">
                <h2>XIN CHÀO BẠN. HÃY BẮT ĐẦU HỌC CÙNG MAPK</h2>
                <h4>Hãy đăng nhập để sử dụng nhé!</h4>
                <Link to='/login'>
                    <button className="btn-login">
                        ĐĂNG NHẬP 
                    </button>
                </Link>
                    
            </div>
        </div>
    );
}
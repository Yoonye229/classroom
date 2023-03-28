import { Link } from "react-router-dom";
import './mainBanner.css'

export default function MainBanner(){
    return(
        <div className="container">
            <image
                className="background" 
                url='https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            />
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
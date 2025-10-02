import { useState } from "react";
import { Link } from "react-router-dom";

const ProductListSlider = ({ allproduct }) => {
    const {
        tag,
        product_desc,
        proudct_img,
        button_txt,
        bg_color,
        border_color,
        button_color
    } = allproduct;

    const [hovered, setHovered] = useState(false);

    return (
        <div className="row">

                <Link to={`/product-details/${allproduct.id}`}>
               
            <div
                className="model_box"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <div className="model_wrapper d-lg-flex d-md-flex">
                    <div
                        className={`left_wrapper ${hovered ? 'active' : ''}`}
                        style={{
                            backgroundColor: hovered ? "#fff" : bg_color,
                            transition: "background 0.7s", borderColor: hovered ? bg_color : bg_color 
                        }}
                    >
                        <div className="chair_info">
                            <h4 style={{ color: hovered ? border_color : "#fff" }}>
                                {tag}
                            </h4>
                            <p style={{ color: hovered ? border_color : "#fff" }}>
                                {product_desc}
                            </p>
                            <button
                                style={{
                                    border: `2px solid ${hovered && border_color ? border_color : "#fff"}`,
                                    color: hovered && button_color ? '#fff' : button_color,
                                    background: hovered && button_color ? button_color : '',
                                    opacity: hovered ? 1 : 0
                                }}
                            >
                                {button_txt}
                            </button>
                        </div>
                    </div>
                    <div
                        className="right_wrapper"
                        style={{
                            backgroundColor: hovered ? bg_color : "#fff",
                            transition: "background 0.3s",  borderColor: hovered ? bg_color : bg_color
                        }}
                         
                    >
                        <div className="chair_img"
                         style={{
                              transition: "0.7s ease",
                          transform: hovered ? "scale(1)" : "scale(0.8)" ,
                          transition: "0.7s ease"
                        }}
                         
                        >
                            <img src={proudct_img} alt="" />
                        </div>
                    </div>
                    
                </div>
            </div>
             </Link>
        </div>
    );
};

export default LeadershipMomentSlider;

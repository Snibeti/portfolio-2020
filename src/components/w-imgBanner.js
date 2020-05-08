import React from "react"
import "../styles/global.css"

const ImgBanner = props => (
        <div className="w-img-banner">
            <img src={props.imgSrc} alt={props.imgAlt} />
            <h5>{props.text}</h5>
        </div>
 );
 export default ImgBanner;
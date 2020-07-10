import React from "react"
import { Link } from "gatsby"
import "../styles/global.css"

const ListLink = props => (
      
      <Link to={props.to}>{props.children}</Link>
  )

const GridItem = props => (
    <div className="grid-img__wrapper">
      <Link to={props.to}>
        <div className="grid-text">{props.text}</div>
        <img src={props.imgSrc} alt={props.imgAlt} />
      </Link>
    </div>
 );
 export default GridItem;

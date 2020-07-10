import React from "react"
import PageWrapper from "../templates/pageWrapper"
import GridItem from "../components/grid-item"
import SecondNav from "../components/second-nav"
import BusBuddy from "../img/busbuddy.png"
import Pluto from "../img/pluto.png"
import Wordpress from "../img/wordpress_proto.png"
import kkDesign from "../img/kk-design.png"
import eyCover from "../img/ey-cover.png"
import Upenn from "../img/upenn-cover.png"

import "../styles/global.css"

export default () => (

<PageWrapper>
<h2 className="page-subhead">my work</h2>
<SecondNav />
<div className="grid-wrapper">
<GridItem
    to="/pluto/"
    text="pluto"
    imgSrc= {Pluto}
    imgAlt="This is an image"
/>
<GridItem

    to="/kkdesign/"
    text="KK Design System"
    imgSrc= {kkDesign}
    imgAlt ="KK Design System"


/>
<GridItem 

    to="/busbuddy/"
    text="bus buddy"
    imgSrc= {BusBuddy}
    imgAlt="This is an image"
/>
<GridItem
    to="/eyWork/"
    text="EY research &amp; design"
    imgSrc= {eyCover}
    imgAlt="EY research &amp; design"
/>
<GridItem

    to="/customwp/"
    text="custom wordpress template"
    imgSrc= {Wordpress}
    imgAlt ="custom wordpress template"

 />
<GridItem
    to="/upennarts/"
    text="UPenn Arts &amp; Sciences"
    imgAlt="UPenn Arts &amp; Sciences"
    imgSrc = {Upenn}
/>
</div>
</PageWrapper>

)

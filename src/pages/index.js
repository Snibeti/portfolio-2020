import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import GridItem from "../components/grid-item"
import SecondNav from "../components/second-nav"
import BusBuddy from "../img/busbuddy.png"
import Pluto from "../img/pluto.png"

import "../styles/global.css"

export default () => (

<Layout>
<Header />
<h2 className="page-subhead">work</h2>
<SecondNav />
<div className="grid-wrapper">
<GridItem
    to="/busbuddy/"
    text="Big text on a hero!"
    imgSrc= {Pluto}
    imgAlt="This is an image"
/>
<GridItem 

    to="/busbuddy/"
    text="Bus Buddy"
    imgSrc= {BusBuddy}
    imgAlt="This is an image"
/>
<GridItem
 />
<GridItem />
<GridItem />
<GridItem />
<GridItem />
<GridItem />
<GridItem />
</div>
</Layout>

)

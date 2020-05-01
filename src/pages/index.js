import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import GridItem from "../components/grid-item"
import SecondNav from "../components/second-nav"

import "../styles/global.css"

export default () => (

<Layout>
<Header />
<h2 className="page-subhead">work</h2>
<SecondNav />
<Button variant="primary">Test component</Button>
<div className="grid-wrapper">
<GridItem />
<GridItem />
<GridItem />
<GridItem />
<GridItem />
<GridItem />
<GridItem />
<GridItem />
<GridItem />
</div>
</Layout>

)

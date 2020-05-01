import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
// import SecondNav from "../components/second-nav"
import "../styles/global.css"

export default () => (



  <Layout>
      <Header />

    <h2 className="page-subhead">about</h2>
    <p>
      <a href="mailto:me@example.com">me@example.com</a>
    </p>
  </Layout>
)
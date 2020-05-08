import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import "../styles/global.css"
import Footer from "../components/footer"


const PageWrapper = props => (

    <Layout>
      <Header />
      {props.children}
      <Footer />
    </Layout>

);

export default PageWrapper;
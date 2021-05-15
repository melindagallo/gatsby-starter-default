import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"


class Faqs extends React.Component {
   constructor(props) {
   super(props);
   this.state = {
     expand: true
   };
  }
  toggle = () => {
    this.setState({ expand: !this.state.expand });
  }
  render = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Testimg change button</h1>
     <p className={this.state.expand ? 'Red' : 'Blue'}>This is my {this.state.expand ? 'Red' : 'Blue'} book.</p>
        <button type="button" onClick={this.toggle.bind(this)}>Change Color</button>
  </Layout>
)
}

export default Faqs

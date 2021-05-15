import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

class ToggleButton extends React.Component {
   constructor(props) {
   super(props);
   this.state = {
     color: true
   }
  }
  
  toggle = () => {
    this.setState({ color: !this.state.color });
  }
  render = props => (
    <p>The color is {this.state.color ? 'Red' : 'Blue'} </p>
  <button type="button" 
    className={this.state.color ? 'Red' : 'Blue'}
    onClick={this.toggle.bind(this)}>
    Change color 
  </button>
  )
}


const Faqs extends React.Component {
   constructor(props) {
   super(props);
   this.state = {
     color: true
   };
  }
  toggle = () => {
    this.setState({ color: !this.state.color });
  }
  render = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
     <p className={this.state.color ? 'Red' : 'Blue'}>This is my {this.state.color ? 'Red' : 'Blue'} book.</p>
        <button type="button" onClick={this.toggle.bind(this)}>Change color</button>

  </Layout>
)
}

export default Faqs

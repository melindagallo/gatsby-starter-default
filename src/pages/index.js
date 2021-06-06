import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

class IndexPage extends React.Component {
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
     <p>This is my {this.state.color ? 'Red' : 'Blue'} book.</p>
        <button type="button" onClick={this.toggle.bind(this)}>Change color</button>

<div className="mycounterdiv"> </div>

<div className="bgbar"><div className="bar"></div></div>
<p>This is my test above</p>
  </Layout>
)
}
export default IndexPage

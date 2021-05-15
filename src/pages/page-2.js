import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


class ToggleButton extends React.Component {
   constructor(props) {
   super(props);
   this.state = {
     expandButton: true
   }
  }
  
  toggle = () => {
    this.setState({ expandButton: !this.state.expandButton });
  }
  render = () => (
    <h2
     className={this.state.expandButton ? 'Mine Red' : 'Mine Blue'}
     >
     This is the header area</h2>
     <button type="button" 
    className={this.state.expandButton ? 'Mine Red' : 'Mine Blue'}
    onClick={this.toggle.bind(this)}>
    Expand or Collapse Button 
   </button>
  )
}


const SecondPage = (props) => (
  <Layout>
    <Seo title="Page two" />
    <h1>Second Page</h1>
    <p>Welcome to page 2 - I hope final</p>
    <ToggleButton />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

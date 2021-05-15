import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"


class ToggleButton extends React.Component {
   constructor(props) {
   super(props);
   this.state = {
     color: true
   }
  }
  
  toggle = (props) => {
    this.setState({ color: !this.state.color });
  }
  render = (props) => (
    <button type="button" 
    className={this.state.color ? 'Mine Red' : 'Mine Blue'}
    onClick={this.toggle.bind(this)}>
    Change color 
   </button>
  )
}


const SecondPage = (props) => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p className={props.color ? 'display' : 'nodisplay'}>Welcome to page 2 - latest</p>
    <ToggleButton />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

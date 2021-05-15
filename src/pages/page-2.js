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
  
  toggle = () => {
    this.setState({ color: !this.state.color });
  }
  render = props => (
    <p>The color is {this.state.color ? 'Red' : 'Blue'} </p>

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
    <p>Welcome to page 2</p>
    <ToggleButton />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

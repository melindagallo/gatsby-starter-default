import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const StyledFaqAnswer = styled.div`
	.question {
		display: ${props => (props.expandButton ? "block" : "none")};
	}
`

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
  render = (props) => (
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
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2 - testing class</p>
    <p className="question">My description My description My description My description My description My description </p>
    <ToggleButton />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
	<script type="text/javascript">
	piAId = "a";
	piCId = "a";
	/>,
	<script type="text/javascript">
	piAId = "b";
	piCId = "b";
	/>
  ])
}


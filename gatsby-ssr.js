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
	dangerouslySetInnerHTML={{__html:" piAId = 'a';\npiCId = 'a';\npiHostname = 'pi.pardot.com';\n(function() {\nfunction async_load(){\nvar s = document.createElement('script'); s.type = 'text/javascript';\ns.src = ('https:' == document.location.protocol ? 'https://pi' : 'http://cdn') + '.pardot.com/pd.js';\nvar c = document.getElementsByTagName('script')[0]; c.parentNode.insertBefore(s, c);}\nif(window.attachEvent) { window.attachEvent('onload', async_load); }\nelse { window.addEventListener('load', async_load, false); }})();\n"
	}}
	</script>,
	<script type="text/javascript">
		dangerouslySetInnerHTML={{__html:" piAId = 'b';\n piCId = 'b';\n piHostname = 'pi.pardot.com';\n (function() {\nfunction async_load(){\nvar s = document.createElement('script'); s.type = 'text/javascript';\ns.src = ('https:' == document.location.protocol ? 'https://pi' : 'http://cdn') + '.pardot.com/pd.js';\nvar c = document.getElementsByTagName('script')[0]; c.parentNode.insertBefore(s, c);}\nif(window.attachEvent) { window.attachEvent('onload', async_load); }\nelse { window.addEventListener('load', async_load, false); }})();\n"
	}}
	</script>
  ])
}

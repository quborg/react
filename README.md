This is a work lab on
	"Up and Running with React.js with Eve Porcello"
		exercices.

_________________________________________________________

HOSTING Application for PRODUCTION
--------------------------------------------------

$ cd /path/to/app

$ npm init

	// insert about app information, will be saved in "package.json"

$ npm install --save httpster

$ npm install --save react-tools

Update "package.json" in line : 7

	"start": "open http://localhost:4321 & httpster -p 4321"

	// run server with $ npm start

Remove JSX transformer lib script tag from index.html header file, also type="text/jsx" attribut from script tag of reacts files application

Then used react-tools to compile XML nodes to XHTML tag for Production

$ jsx src/ build/

will generate compiled src files into build folder

_________________________________________________________

Component Life Cycle: Mounting
------------------------------------------

→ getDefaultProps
→ getInitialState

	// this two called ones and set default both : Props and State

→ componentWillMount

	// called right before the render, the last chance to affect the render

→ render

	// only required method

→ componentDidMount

	// after successful render, we can now access & interact with the dom

Component Life Cycle: Updating
------------------------------------------

→ componentWillReceiveProps

	// when called component can be updated & receive

→ shouldComponentUpdate
→ componentWillUpdate

	// invoked right before render and often used to enhance performance

→ render

	// also can be used to update component

→ componentDidUpdate

	// Invoked immediately after the component's updates are flushed to the DOM, not called for the initial render

Component Life Cycle: Unmount
------------------------------------------

→ componentWillUnmount

	// called before component unmounted from the DOM, can help us to clean up dom elements and invalidating timers

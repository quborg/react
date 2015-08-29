This is a work lab on
	"Up and Running with React.js with Eve Porcello"
                                     exercices.

_________________________________________________________

PRODUCTION branch spicies:
--------------------------------------

We used react-tools to compile html tags to js for Production

$ npm install -g react-tools
$ jsx src/ build/

will generate compiled src files to build

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

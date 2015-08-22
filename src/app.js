var Component = React.createClass({
	render: function() {
		return <div>
					<h1>{this.props.text}</h1>
					<p>{this.props.children}</p>
			</div>;
	}
});
React.render(	<div>
					<Component text="Hello world">This is a hello world</Component>
					<Component text="How are you ?">This is a how are you ?</Component>
					<Component text="Goodbye">This is a goodbye</Component>
				</div>
	,document.getElementById('react-container')
);

var Hello = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Hello !</h1>
				<p>This is a simple text.</p>
			</div>
		);
	}
});
React.render(<Hello/>,document.body);

import React from 'react';

const ContactES5 = React.createClass({

	propTypes: {
		name: React.PropTypes.string,
    	age: React.PropTypes.number

	},
	getDefaultProps() {
		return {
			name : 'Arvind',
			age	: 34
		};
	},
	render () {
		return (
			<h1> ES5 {this.props.name + " "+ this.props.age}</h1>
		)
	}

});

export default ContactES5;
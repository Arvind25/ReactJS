import React , { Component } from 'react';

class ContactES6 extends Component {

	static propTypes = {
	    name: React.PropTypes.string,
	    age: React.PropTypes.number
	};

	static defaultProps = {
	    name: 'Arvind Mehta',
	    age: 35
	};
	
	constructor  ( props ) {
		super ( props );
	};

	render (){
		return (
			<h1> ES6 {"Name: "+ this.props.name +" , Age: "+this.props.age}</h1>
		)
	};
}

/*ContactES6.propsType = {
	name : React.PropTypes.string,
	age: React.PropTypes.number
};

ContactES6.defaultProps = {
	name: "Mehta",
	age: 35
};*/
export default ContactES6;
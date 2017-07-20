import React, { Component } from 'react';


function Prof (props){
	return (
		<div>
			<h1>Hello {props.name} </h1>
		</div>
	);
}
const element = <Prof name=" hi! " />
class Prop extends Component {
	render () {
		return (
			element
		);
	}
}
export default Prop;
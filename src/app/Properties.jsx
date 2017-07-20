import React, { Component} from 'react';

function Welcome(props) {
  return (
  	<div>
    	<h1>Hello {props.fname + " " + props.lname}</h1>
    </div>
  );
}
function App() {
  return (
    <div>
      <Welcome fname="Sara" />
      <Welcome fname="Cahal" />
      <Welcome fname="Edite" />
    </div>
  );
}
const element = <Welcome fname="Arvind" lname= "Element" />

class Properties extends Component {
	render () {
		return(
			//we can also use element instead of welcome
			//Also if you want to reuse multiple time then you have to wrap in <div>
			//Components must return a single root element. This is why we added a <div> to contain all the <Welcome /> elements.

			<div>
				{element}
				<Welcome fname="Arvind0" lname= "div" />
				<Welcome fname="Arvind1" lname= "div" />
				<Welcome fname="Arvind2" lname= "div" />
				<App/>
			</div>
			
		);		 
	}
}

export default Properties;
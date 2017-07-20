import React , { Component } from 'react'

/*function Clock (props) {
	return (
		<h1>Time: {this.state.date.toLocaleTimeString()}</h1>
	)
}*/
//1) Replace this.props.date with this.state.date in the render() method:
//2) Add a class constructor that assigns the initial this.state:
		//Class components should always call the base constructor with props.
/* In applications with many components, it's very important to free up resources taken by the components when they are destroyed.

	We want to set up a timer whenever the Clock is rendered to the DOM for the first time. This is called "mounting" in React.

	We also want to clear that timer whenever the DOM produced by the Clock is removed. This is called "unmounting" in React.

	We can declare special methods on the component class to run some code when a component mounts and unmounts:
*/

class Lifecycle extends Component {

	constructor (props) {
		super (props);
		this.state = {date: new Date()};
	}
	//-----------These methods are called "lifecycle hooks".----------
	componentDidMount () {
		this.timerID = setInterval(
	      	() => this.tick(), 	1000
	    );
	}
	componentWillUnmount () {
		clearInterval(this.timerID);
	}
	//-------------------------------------
	tick() {
    	this.setState({
      		date: new Date()
    	});
  	}

	render () {
		return (
			<h1>Time--: {this.state.date.toLocaleTimeString()}</h1>
		)
	}

}
export default Lifecycle;
/*
Let's quickly recap what's going on and the order in which the methods are called:

1) When <Clock /> is passed to ReactDOM.render(), React calls the constructor of the Clock component. 
		Since Clock needs to display the current time, it initializes this.state with an object including the current time. 
		We will later update this state.

2) React then calls the Clock component's render() method. This is how React learns what should be displayed on the screen. 
React then updates the DOM to match the Clock's render output.

3) When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle hook. 
	Inside it, the Clock component asks the browser to set up a timer to call tick() once a second.

4) Every second the browser calls the tick() method. Inside it, 
	the Clock component schedules a UI update by calling setState() with an object containing the current time. 
	Thanks to the setState() call, React knows the state has changed, and calls render() method again to learn 
	what should be on the screen. This time, this.state.date in the render() method will be different,
	and so the render output will include the updated time. React updates the DOM accordingly.

5) If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle 
	hook so the timer is stopped.*/
import React from 'react';

var TimeDisplay = React.createClass({
	render (){
	    return (
		    <div>
		      <h2>{new Date().toLocaleTimeString()}.</h2>
		    </div>
	    );
	}
});


export default TimeDisplay;
//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";
import "./icons.js";
//import your own components
function SecondsCounter(props) {
	return (
		<div className="BigCounter">
			<div className="Clock">
				<i className="far fa-clock"></i>
			</div>
			,<div className="OneZero">0</div>,<div className="TwoZero">0</div>,
			<div className="ThreeZero">0</div>,<div className="FourZero">0</div>
			,<div className="FiveZero">0</div>,<div className="Seconds">0</div>,
		</div>
	);
}

//render your react application
ReactDOM.render(<SecondsCounter />, document.querySelector("#app"));

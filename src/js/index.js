//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
function SecondsCounter(props) {
	return (
		<div className="BigCounter">
			<div className="Clock">
				<i className="far fa-clock"></i>
			</div>
			<div className="OneZero">{props.digitOne % 10}</div>
			<div className="TwoZero">{props.digitTwo % 10}</div>
			<div className="ThreeZero">{props.digitThree % 10}</div>
			<div className="FourZero">{props.digitFour % 10}0</div>
			<div className="FiveZero">{props.digitFive % 10}</div>
			<div className="Seconds">{props.digitSeconds % 10}</div>
		</div>
	);
}
SecondsCounter.propTypes = {
	digitOne: PropTypes.number,
	digitTwo: PropTypes.number,
	digitThree: PropTypes.number,
	digitFour: PropTypes.number,
	digitFive: PropTypes.number,
	digitSeconds: PropTypes.number
};
let counter = 0;
setInterval(function() {
	const One = Math.floor(counter / 1000000);
	const Two = Math.floor(counter / 100000);
	const Three = Math.floor(counter / 10000);
	const Four = Math.floor(counter / 1000);
	const Five = Math.floor(counter / 100);
	const Seconds = Math.floor(counter / 10);
	counter++;
	ReactDOM.render(
		<SecondsCounter
			digitSeconds={Seconds}
			digitFive={Five}
			digitFour={Four}
			digitThree={Three}
			digitTwo={Two}
			digitOne={One}
		/>,
		document.querySelector("#app")
	);
	1000;
});

//render your react application

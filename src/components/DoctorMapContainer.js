// DoctorMapContainer.js

import React from "react";
import DoctorsMap from "./DoctorsMap";

export default class DoctorMapContainer extends React.Component {

	render() {
		return (
			<DoctorsMap
				doctors={this.props.doctors}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div style={{ height: `600px`, width: `600px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}

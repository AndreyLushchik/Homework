import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import VideoTag from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<VideoTag
			type="Regular text"
			fSize={25}
			textColor="black"
			isUnderline={false}
		/>
		<VideoTag
			type="Huge Header"
			fSize={50}
			textColor="black"
			isUnderline={false}
		/>
		<VideoTag
			type="Danger notification"
			fSize={25}
			textColor="red"
			isUnderline={false}
		/>
		<VideoTag
			type="Underline text"
			fSize={30}
			textColor="black"
			isUnderline={true}
		/>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import "./App.css";

function VideoTag({ type, fSize, textColor, undercover }) {
	return (
		<span
			className="video-tag"
			style={{
				fontSize: `${fSize}px`,
				color: `${textColor}`,
				textDecoration: `${undercover ? "underline" : "none"}`,
			}}
		>
			{type}
		</span>
	);
}

export default VideoTag;

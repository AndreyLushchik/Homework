import "./App.css";

function VideoTag({ type, fSize, textColor, isUnderline }) {
	return (
		<span
			className="video-tag"
			style={{
				fontSize: `${fSize}px`,
				color: `${textColor}`,
				textDecoration: `${isUnderline ? "underline" : "none"}`,
			}}
		>
			{type}
		</span>
	);
}

export default VideoTag;

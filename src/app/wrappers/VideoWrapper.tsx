import React from "react";

interface VideoWrapperProps {
  children: React.ReactNode;
  videoSrc: string;
}

const VideoWrapper: React.FC<VideoWrapperProps> = ({ children, videoSrc }) => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded">
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 z-0 w-auto min-w-full min-h-full max-w-none"
      />
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
};

export default VideoWrapper;

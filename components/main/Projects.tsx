import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col items-center justify-center">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/react-admin-dashboard.png"
          title="React Admin Dashboard"
          description="React JS | Syncfusion"
        />

        <ProjectCard
          src="/video-conference.png"
          title="Video Conferencing App"
          description="NextJs | Tailwind CSS | Webrtc | PeerJs"
        />

        <ProjectCard
          src="/drawing-tool.png"
          title="Real Time Drawing Tool"
          description="Next Js | Websocket"
        />
      </div>
    </div>
  );
};

export default Projects;

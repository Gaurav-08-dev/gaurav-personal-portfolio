import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="z-50 flex flex-col items-center justify-center"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/react-admin-dashboard.png"
          title="React Admin Dashboard"
          description="React JS | Syncfusion"
          url="https://react-admin-dashboard-syncfusion-shop.netlify.app/"
        />

        <ProjectCard
          src="/video-conference.png"
          title="Video Conferencing App"
          description="NextJs | Tailwind CSS | Webrtc | PeerJs"
          url="https://github.com/Gaurav-08-dev/Video-Conferencing"
        />

        <ProjectCard
          src="/drawing-tool.png"
          title="Real Time Drawing Tool"
          description="Next Js | Websocket"
          url="https://online-drawing-tool-pearl.vercel.app/"
        />

        <ProjectCard
          src="/thinkai.png"
          title="SaaS AI Image Transformation Tool"
          description="Next JS | Tailwind CSS | Webhooks | Clerk | Stripe | Mongo DB | Zod | ShadCn"
          url="https://thinkai.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;

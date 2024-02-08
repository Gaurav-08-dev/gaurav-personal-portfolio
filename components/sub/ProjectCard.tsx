import React from "react";
import Image from "next/image";


interface Props {
  src: string;
  title: string;
  description: string;
  url:string
}

const ProjectCard = ({ src, title, description, url }: Props) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className=" p-4 flex flex-row justify-between items-center" >
        <div>
          <h1 className=" text 2-xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
        <a title={title} href={url} target="_blank" className="text-slate-100 hover:text-violet-400">Visit</a>
      </div>
    </div>
  );
};

export default ProjectCard;

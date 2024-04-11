import React from "react";
import TeamMemberCard from "./ui/TeamMemberCard";

import member1 from "../assets/member1.png";
import member2 from "../assets/member2.png";
import member3 from "../assets/member3.png";
import member4 from "../assets/member4.png";
import WhatWeDo from "./ui/WhatWeDo";
import { PiNotePencilFill } from "react-icons/pi";
import { MdWeb } from "react-icons/md";
import { AiTwotoneSound } from "react-icons/ai";

const AboutSection = () => {
  return (
    <div className="py-4 flex justify-center">
      <div className="w-[1600px] relative">
        <h6 className="text-3xl py-6 font-thin">What We Do</h6>
        <div className="flex items-center justify-between">
          <WhatWeDo
            icon={<PiNotePencilFill />}
            title="3D Planning"
            description="
3D planning streamlines project development by offering detailed visualizations and analysis, enhancing decision-making and minimizing errors before implementation."
          />
          <WhatWeDo
            icon={<MdWeb />}
            title="Web Platform"
            description="A web platform serves as an online space where users can access various services, information, or tools through a web browser."
          />
          <WhatWeDo
            icon={<AiTwotoneSound />}
            title="Marketing"
            description="Marketing involves strategically promoting products, services, or ideas to target audiences to achieve specific business objectives."
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

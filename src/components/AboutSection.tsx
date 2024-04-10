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
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis excepturi libero nihil ad sint nostrum."
          />
          <WhatWeDo
            icon={<MdWeb />}
            title="Web Platform"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis excepturi libero nihil ad sint nostrum."
          />
          <WhatWeDo
            icon={<AiTwotoneSound />}
            title="Marketing"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis excepturi libero nihil ad sint nostrum."
          />
        </div>
        <div className="flex items-center pt-8">
          <h3 className="text-3xl py-6 font-thin">Our Team</h3>
        </div>
        <div className="flex items-center">
          <div className="w-[1600px] flex items-center justify-between pt-4">
            <TeamMemberCard
              memberName="Bhavik Jonathan"
              membertitle="Founder, CEO"
              memberPicture={member1}
              memberPictureAlt="Bhavik Jonathan"
            />
            <TeamMemberCard
              memberName="Ali Michael Doe"
              membertitle="Co-Founde, CBO"
              memberPicture={member2}
              memberPictureAlt="Ali Michael Doe"
            />
            <TeamMemberCard
              memberName="Avnish Hyuga"
              membertitle="Lead Dev, CTO"
              memberPicture={member3}
              memberPictureAlt="Avnish Hyuga"
            />
            <TeamMemberCard
              memberName="Rahul Gami"
              membertitle="Designer"
              memberPicture={member4}
              memberPictureAlt="Rahul Gami"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

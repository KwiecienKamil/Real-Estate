import WhatWeDo from "./ui/WhatWeDo";
import { PiNotePencilFill } from "react-icons/pi";
import { MdWeb } from "react-icons/md";
import { AiTwotoneSound } from "react-icons/ai";
import OurClients from "./OurClients";

const AboutSection = () => {
  return (
    <div className="py-4 flex justify-center">
      <div className="w-[1400px]">
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
        <OurClients />
      </div>
    </div>
  );
};

export default AboutSection;

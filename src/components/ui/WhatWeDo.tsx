import React from "react";

type WhatWeDoProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const WhatWeDo = ({ icon, title, description }: WhatWeDoProps) => {
  return (
    <div className="flex items-center justify-center flex-col w-[400px] pt-8">
      <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-br from-smokeWhite to-white flex items-center justify-center">
        <div className="w-[150px] h-[150px] rounded-full bg-gradient-to-br from-smokeWhite to-white flex items-center justify-center  shadow-md">
          <span className="text-[40px] text-accent">{icon}</span>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col pt-8">
        <h5 className="font-semibold pb-2">{title}</h5>
        <p className="text-center">{description}</p>
      </div>
    </div>
  );
};

export default WhatWeDo;

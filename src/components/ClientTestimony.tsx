import React from "react";
import TeamMemberCard from "./ui/TeamMemberCard";
import client1 from "../assets/client1.png";

const ClientTestimony = () => {
  return (
    <div className="py-8 flex justify-center">
      <div className="w-[1600px] relative">
        <h6 className="text-3xl py-6 font-thin">Client Testimony</h6>
        <div className="flex items-center justify-center gap-32">
          <TeamMemberCard
            memberPicture={client1}
            memberPictureAlt="Client"
            memberName="Jonathan Seth"
            membertitle="Founder, CEO"
          />
            {" "}
            <p className="w-[400px]">
              "I was blown away by the level of dedication and expertise. From
              start to finish, they guided me through every step of the home
              buying process with patience and professionalism.
            </p>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimony;

import { MdKeyboardDoubleArrowDown } from "react-icons/md";

type GroupCardProps = {
  title: string;
  experience: string;
  projectsDone: string;
  alternativeText: string;
  groupLogo: string;
};

const GroupCard = ({
  groupLogo,
  alternativeText,
  title,
  experience,
  projectsDone,
}: GroupCardProps) => {
  return (
    <div className="px-6 py-4 bg-white rounded-xl shadow-lg h-[400px] relative">
      <div className="h-[40%] relative">
        <img
          src={groupLogo}
          alt={alternativeText}
          className="w-[240px] h-full object-contain"
        />
      </div>
      <div className="pt-12 pl-4">
        <h2 className="font-bold text-lg">{title}</h2>
        <p>{experience}</p>
        <p className="font-semibold text-accent">{`${projectsDone} Projects Done`}</p>
      </div>
      <div className="pt-8 flex justify-center">
        <button className="flex items-center  shadow-lg  font-semibold text-accent rounded-full pl-1 hover:bg-accent hover:text-white duration-300">
          <span className="px-4 py-2">Check profile</span>
          <span className="p-3 shadow-lgrounded-full">
            <MdKeyboardDoubleArrowDown className="text-xl" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default GroupCard;

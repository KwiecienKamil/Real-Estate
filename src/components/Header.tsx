import logo from "../assets/home-logo.png";
import homePicture from "../assets/home-picture.png";

import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex justify-between h-[800px] relative">
      <div className="w-[35%] flex flex-col justify-between py-12 pl-16">
        <img src={logo} alt="logo" className="w-[80px]" />
        <h1 className="font-lora text-5xl text-grayish font-semibold pr-8">
          We Help You Building The Dreams & Bring More Than You Expect
        </h1>
        <div>
          <button className="flex items-center gap-2 px-6 py-3 text-accent font-bold bg-white shadow-lg rounded-lg hover:bg-accent hover:text-white duration-300">
            Search Properties
            <span>
              <IoSearchOutline />
            </span>
          </button>
        </div>
      </div>
      <div className="w-[60%] h-full overflow-hidden">
        <img
          src="https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Home page picture"
          className="w-[120%] object-cover h-full object-right rounded-l-sm animate-move"
        />
      </div>
    </div>
  );
};

export default Header;

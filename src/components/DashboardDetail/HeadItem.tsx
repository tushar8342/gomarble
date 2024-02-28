import { FaPencilAlt } from "react-icons/fa";
import { BiSolidUpArrow } from "react-icons/bi";
import { SetStateAction, useState } from "react";
import { Tooltip, Typography } from "@material-tailwind/react";
import TrendMenu from "../../assets/TrendMenu.svg";
import TrendQuestion from "../../assets/TrendQuestion.svg";
import { Menulist } from "../../context/index";

export const HeadItem = ({ title, total, per, index }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [menuHoveredIndex, setMenuHoveredIndex] = useState(-1);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMenuMouseEnter = (index: SetStateAction<number>) => {
    setMenuHoveredIndex(index);
  };

  const handleMenuMouseLeave = () => {
    setMenuHoveredIndex(-1);
  };
 

  return (
    <div
      className={`rounded-lg cursor-pointer  px-8 md:px-4 py-4
        ${index === 0 ? "bg-[#F1F1F1]" : ""}
        hover:bg-[#F1F1F1] mb-4 sm:mb-0`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="py-1  border-b-2 border-dashed flex justify-between items-center">
        <Tooltip
          placement="bottom-start"
          className="border border-blue-gray-50 text-black bg-white px-4 py-3 shadow-xl shadow-black/10"
          content={
            <div className="w-50 px-2 sm:w-100">
              <Typography
                placeholder="Your placeholder text"
                color="blue-gray"
                className="font-semibold py-1 text-sm sm:text-lg"
              >
                Online Store sessions
              </Typography>

              <Typography
                placeholder="Your placeholder text"
                variant="small"
                color="blue-gray"
                className="font-normal py-1 text-[.7rem] sm:text-md opacity-80"
              >
                Your online store's traffic volume, shown in sessions.
              </Typography>
            </div>
          }
        >
          <p className="font-semibold font-inter text-md text-[#303030]">{title}</p>
        </Tooltip>

        <p
          className={`text-[#70707A] ${isHovered ? "block" : "hidden"}
        hover:p-1 hover:bg-[#aeabab] rounded  p-1 relative`}
        >
          <span className=" rounded focus:outline-none" onClick={toggleMenu}>
            <FaPencilAlt />
          </span>

          {isOpen && (
            <div
              className="MenuList fixed inset-0 sm:inset-auto lg:inset-auto z-50 flex items-center justify-center bg-opacity-50
              sm:top-40 sm:right-0 sm:left-20
              "
              onClick={toggleMenu}
            >
              <div className="bg-white p-4 rounded shadow-lg">
                <ul className="list-none p-0">
                  {Menulist.map((item: any, index: any) => (
                    <li
                      key={index}
                      onMouseEnter={() => handleMenuMouseEnter(index)}
                      onMouseLeave={handleMenuMouseLeave}
                      className={`py-2 w-56 cursor-pointer px-2 rounded-lg hover:bg-[#F1F1F1] flex justify-between items-center ${
                        menuHoveredIndex === index ? "bg-[#F1F1F1]" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={TrendMenu}
                          className="w-4 h-4"
                          alt="Trend Icon"
                        />
                        <p className="text-sm truncate">{item.title}</p>
                      </div>
                      {menuHoveredIndex === index && (
                        <img
                          src={TrendQuestion}
                          className="w-4 h-4 ml-5 self-end"
                          alt="Trend Icon"
                        />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </p>
      </div>

      <div className="py-1 px-2 md:px-0 lg:px-1 flex flex-row items-center gap-2">
        <p className="font-bold text-[#303030]  sm:text-sm lg:text-lg">{total}</p>
        <div className="flex items-center">
          <BiSolidUpArrow className="text-sm text-[#70707A]" />
          <p className="text-[#70707A] text-[.8rem] ml-1">{per}</p>
        </div>
      </div>
    </div>
  );
};

import { Headingdata } from "../../context/index";
import { HeadItem } from "./HeadItem";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Head = ({ SetActive, ActiveStore }: any) => {
  const handleActive = () => {
    SetActive((prev: any) => !prev);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 px-4 lg:px-8 gap-2 lg:gap-8">
    {Headingdata.map((heading, index) => (
      <HeadItem
        key={index}
        index={index}
        title={heading.Title}
        total={heading.total}
        per={heading.per}
      />
    ))}
    <div className="m-auto">
      <button onClick={handleActive} className="m-auto">
        {ActiveStore ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </button>
    </div>
  </div>
  

  );
};

export default Head;

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CardMenu = ({ _name }: { _name: string }) => {
  return (
    <div className="p-4 my-3 mx-3 uppercase border-b-gray-50 border-solid   border-2 hover:bg-slate-400">
      {_name}
    </div>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(!isOpen);
  }

  const Menu = () => {
    return (
      <>
        <a href="#stick" about="_blank">
          <p className=" nav-btn">Home</p>
        </a>
        <a onClick={handleOpen} href="contact">
          <p className=" nav-btn">Contact</p>
        </a>
        <a onClick={handleOpen} href={"#about"}>
          <p className=" nav-btn">About</p>
        </a>
      </>
    );
  };
  return (
    <div
      data-scroll
      data-scroll-sticky
      data-scroll-target="#stick"
      className="z-[100]  h-14 items-center self-center justify-center flex "
    >
      <div
        className={
          "h-14 z-50 md:m-1 lg:w-2/6 md:w-2/5 w-full  bg-slate-400 border-2 border-gray-200 md:mr-4  md:opacity-70 text-black  flex items-center justify-end text-end  fixed md:rounded-lg "
        }
      >
        <div className="md:flex w-full justify-around hidden">
          <div className=" flex gap-2">
            <Menu />
          </div>

          <a href={"#content"}>
            <p className=" btn">sht</p>
          </a>
        </div>
        {/* Mobile navbar */}
        <div className="md:hidden px-4 flex  justify-between w-full">
          <div>MASHPA</div>
          <div onClick={handleOpen}>
            {isOpen ? (
              <svg
                className="w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5"
                xmlns="  http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </div>
        </div>

        <div
          className={
            isOpen
              ? "text-xl md:hidden rounded-sm absolute top-0 text-start left-0 bg-slate-200 z-50 text-black w-3/5 h-screen"
              : "hidden"
          }
        >
          <div className=" bg-purple-400 h-14 " />
          <a onClick={handleOpen}  href={"#stick"}>
            <CardMenu _name="Home" />
          </a>
          <a onClick={handleOpen} href={"#contact"}>
            <CardMenu _name="Contact" />
          </a>
          <a onClick={handleOpen} href={"#about"}>
            <CardMenu _name="About" />
          </a>
      
        </div>
      </div>
    </div>
  );
};

export default Nav;

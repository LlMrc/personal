import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div
    
      className="z-[100] pt-4 h-14 items-center bg-transparent self-center justify-center flex sticky bg-gradient-to-r  from-black w-full "
    >
      <div
        className={
          
          " z-[100] h-14 md:m-1 lg:w-2/6 md:w-2/5   md:bg-slate-400 md:border-2 border-gray-200 md:mr-4  md:opacity-70 md:text-black text-skin-muted  flex items-center justify-end text-end sticky md:rounded-lg  "
        }
      >
        <div className="md:flex w-full justify-around">
          <div className=" flex gap-2">
            <Link to="/">
              <p className=" nav-btn">Home</p>
            </Link>
            <Link to="/contact">
              <p className=" nav-btn">Contact</p>
            </Link>
            <Link to={"/service"}>
              <p className=" nav-btn">Services</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nav;

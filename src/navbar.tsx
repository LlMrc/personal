import { Link } from "react-router-dom";
import masha from "./assets/masha.png"

const Nav = () => {

  


  return (
    <div
      className={
        " z-100 sticky h-14 md:bg-[url('./assets/bg.jpg')] bg-black bg-cover md:bg-slate-400 md:border-2 border-gray-200 opacity-70 md:text-black text-skin-muted justify-around flex items-center " /*md:m-1 lg:w-2/6 md:w-2/5*/
      }
    >
      <div className="hidden md:block">
        <img className="h-16 w-24 bg-slate-900" src={masha} alt="masha logo" />
      </div>

      <div className="flex">
        <Link to="/">
          <p className=" nav-btn">Home</p>
        </Link>

        <Link to="/about">
          <p className=" nav-btn">About</p>
        </Link>
        <Link to={"/contact"}>
          <p className=" nav-btn">Contact</p>
        </Link>
      </div>

      <button
        type="button"
        className="hidden md:block  rounded bg-primary w-24 p-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      >
        <span>SIGN IN</span>
      </button>
    </div>
  );
};
export default Nav;

const Nav = () => {
  return (
    <div
      data-scroll
      className="z-[100] pt-2 h-14 items-center self-center justify-center flex sticky "
    >
      <div
        className={
          " z-[100] h-14 md:m-1 lg:w-2/6 md:w-2/5   md:bg-slate-400 md:border-2 border-gray-200 md:mr-4  md:opacity-70 md:text-black text-skin-muted  flex items-center justify-end text-end  fixed md:rounded-lg "
        }
      >
        <div className="md:flex w-full justify-around">
          <div className=" flex gap-2">
            <a href="#">
              <p className=" nav-btn">Home</p>
            </a>
            <a href="#">
              <p className=" nav-btn">Contact</p>
            </a>
            <a href={"#"}>
              <p className=" nav-btn">About</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Nav;

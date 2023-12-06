const Header = () => {
  return (
    <header className="h-[60px] bg-charcoal-grey px-5 flex flex-row justify-between items-center  ">

        <div className="flex flex-col  md:flex-row  md:items-center">
          <span className="me-5 text-white text-xl">Arvan Challenge</span>
          <span className="text-white text-base">Wellcom Elham</span>
        </div>
        <button className=" py-2 px-4 text-base bg-charcoal-grey text-dark-sky-blue border border-1 border-dark-sky-blue rounded">Logout</button>
   
    </header>
  );
};
export default Header;

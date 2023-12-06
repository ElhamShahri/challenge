const Sidebar = () => {
  return (
    <nav className="flex flex-row md:flex-col  ">
      <label className="text-white text-2xl ms-5 mb-3 mt-2">Post</label>
      <ul className="flex flex-row md:flex-col ">
        <li className="py-3 px-8 bg-white bg-opacity-20 ms-10 md:ms-0 ">
          <span className="text-md text-white ">All Article</span>
        </li>
        <li className="py-3 px-8   ">
          <span className="text-md text-white">New Article</span>
        </li>
      </ul>
    </nav>
  );
};
export default Sidebar;

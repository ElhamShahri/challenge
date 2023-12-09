import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const path = useLocation().pathname;

  return (
    <nav className="flex flex-row md:flex-col  ">
      <label className="text-white text-2xl ms-5 mb-3 mt-2">Post</label>
      <ul className="flex flex-row md:flex-col ">
        <li
          className={`py-3 px-8  ms-10 md:ms-0 cursor-pointer ${
            (path == "/" || path.split("/")[2] == "page") &&
            `bg-white bg-opacity-20`
          }`}
          onClick={() => {
            navigate("/");
          }}
        >
          <span className="text-md text-white ">All Article</span>
        </li>
        <li
          className={`py-3 px-8  cursor-pointer ${
            (path == "/article/create" || path.split("/")[2] == "edit") &&
            `bg-white bg-opacity-20`
          }`}
          onClick={() => {
            navigate("/article/create");
          }}
        >
          <span className="text-md text-white">New Article</span>
        </li>
      </ul>
    </nav>
  );
};
export default Sidebar;

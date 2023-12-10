import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const client = useQueryClient();
  const navigate = useNavigate();

  const logout = () => {
    client.removeQueries();
    navigate("/login");
  };
  
  return (
    <header className="h-[60px] w-full bg-charcoal-grey px-5 flex flex-row justify-between items-center fixed z-10 ">
      <div className="flex flex-col  md:flex-row  md:items-center">
        <span className="me-5 text-white text-xl">Arvan Challenge</span>
        <span className="text-white text-base">
          {"Wellcom " + localStorage.getItem("username")}
        </span>
      </div>
      <button
        className=" py-2 px-4 text-base bg-charcoal-grey text-dark-sky-blue border border-1 border-dark-sky-blue rounded"
        onClick={logout}
      >
        Logout
      </button>
    </header>
  );
};
export default Header;

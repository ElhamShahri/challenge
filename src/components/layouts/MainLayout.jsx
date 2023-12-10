
import Sidebar from "./Sidebar";
import Header from "./header";

const MainLayout = ({children}) => {
    return (
        <div className="w-full h-screen">
       
          <Header />
      
          <div className="w-full md:h-[calc(100vh-60px)] fixed flex flex-col md:flex-row ">
            <div className="w-full md:w-[250px] md:h-full bg-water-blue fixed  mt-[60px] "><Sidebar/></div>
            <div className="w-full h-full mt-[110px] md:mt-[60px] md:ms-[250px] overflow-auto">{children}</div>
          </div>
        </div>
    );
  };
  export default MainLayout;
  
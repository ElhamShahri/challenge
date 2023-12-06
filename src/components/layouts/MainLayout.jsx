import Sidebar from "./Sidebar";
import Header from "./header";

const MainLayout = () => {
    return (
        <div className="w-full h-screen">
        <Header />
          <div className="w-full  h-[calc(100vh-60px)] flex flex-col md:flex-row ">
            <div className="min-w-[250px] bg-water-blue"><Sidebar/></div>
            <div>content</div>
          </div>
        </div>
    );
  };
  export default MainLayout;
  
import { AiFillBank } from "react-icons/ai";
import CustomIcon from "./components/CustomIcon";

import programming from'./assets/programing.jpg'
const App = () => {
  return (
    <>
      <section className="flex wrapper justify-center items-center h-screen">
        <div>
          <div className="bg-amber-600 h-20 w-40 m-4 "><AiFillBank size={40} className="flex justify-center items-center mx-auto my-auto"/></div>
          <div className="bg-amber-500 h-20 w-40 m-4 "><AiFillBank size={40} className="flex justify-center items-center mx-auto my-auto"/></div>
          <div className="bg-amber-400 h-20 w-40 m-4 "><AiFillBank size={40} className="flex justify-center items-center mx-auto my-auto"/></div>
          <div className="bg-amber-300 h-20 w-40 m-4 "><AiFillBank size={40} className="flex justify-center items-center mx-auto my-auto"/></div>
          <div className="bg-amber-200 h-20 w-40 m-4 "><AiFillBank size={40} className="flex justify-center items-center mx-auto my-auto"/></div>
        </div>
        <div>
          <div className="bg-blue-600 h-20 w-40 m-4 "> <CustomIcon/></div>
          <div className="bg-blue-500 h-20 w-40 m-4 "> <CustomIcon/></div>
          <div className="bg-blue-400 h-20 w-40 m-4 "> <CustomIcon/></div>
          <div className="bg-blue-300 h-20 w-40 m-4 "> <CustomIcon/></div>
          <div className="bg-blue-200 h-20 w-40 m-4 "> <CustomIcon/></div>
        </div>
        <div>
          <div className="bg-green-600 h-20 w-40 m-4 "></div>
          <div className="bg-green-500 h-20 w-40 m-4 "></div>
          <div className="bg-green-400 h-20 w-40 m-4 "></div>
          <div className="bg-green-300 h-20 w-40 m-4 "></div>
          <div className="bg-green-200 h-20 w-40 m-4 "></div>
        </div>
        <div>
          <div className="bg-red-600 h-20 w-40 m-4 my-20 "> <img src={programming} alt="" /> </div>
          <div className="bg-red-500 h-20 w-40 m-4 my-20 "> <img src={programming} alt="" /> </div>
          <div className="bg-red-400 h-20 w-40 m-4 my-20 "> <img src={programming} alt="" /> </div>
          <div className="bg-red-300 h-20 w-40 m-4 my-20 "> <img src={programming} alt="" /> </div>
          <div className="bg-red-200 h-20 w-40 m-4  my-20"> <img src={programming} alt="" /> </div>
        </div>
        <div>
          <div className="bg-violet-600 h-20 w-40 m-4 "></div>
          <div className="bg-violet-500 h-20 w-40 m-4 "></div>
          <div className="bg-violet-400 h-20 w-40 m-4 "></div>
          <div className="bg-violet-300 h-20 w-40 m-4 "></div>
          <div className="bg-violet-200 h-20 w-40 m-4 "></div>
        </div>
      </section>
    </>
  );
};

export default App;

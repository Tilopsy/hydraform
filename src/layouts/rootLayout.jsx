import { Outlet } from "react-router-dom";
import Navbar from "../constants/navbar";

const RootLayout = () => {
  return (<>
  <Navbar/>
  <Outlet/>

  </>
  )
};

export default RootLayout;




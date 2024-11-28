import { Outlet } from "react-router-dom";
import Navbar from "../constants/navbar";
import Footer from "../constants/footer";

const RootLayout = () => {
  return (<>
  <Navbar/>
  <Outlet/>
  <Footer/>

  </>
  )
};

export default RootLayout;




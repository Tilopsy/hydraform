import { Outlet } from "react-router-dom";
import Footer from "../constants/footer";

const RootLayout = () => {
  return (<>
  <Outlet/>
  <Footer/>
  </>
  )
};

export default RootLayout;




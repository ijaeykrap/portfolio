import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Header from "./Assets/Header";
import Footer from "./Assets/Footer";
import ScrollBtn from "./Assets/ScrollBtn";

export default function RootLayout() {
  const location = useLocation();
  return (
    <>
      <Header />
      <Outlet />
      {location.pathname === "/" ? null : <ScrollBtn />}
      {location.pathname === "/" ? null : <Footer />}
    </>
  );
}

 import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LandingLayout() {
  return (
    <>
      <Header/>
        <Outlet />
      <Footer/>
    </>
  );
}
 
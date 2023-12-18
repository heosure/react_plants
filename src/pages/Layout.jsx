import Header from "../elements/Header";
import Footer from "../elements/Footer";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </>
  );
}

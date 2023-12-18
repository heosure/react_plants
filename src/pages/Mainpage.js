// import { Outlet, Route, Routes } from "react-router-dom";
import "../css/myreset.css";
import "../css/common.css";
import Layout from "./Layout";
import SecCon from "./SecCon";
import { Route, Routes } from "react-router-dom";
import { data } from "../data";
import { Outlet } from "react-router-dom";

function Mainpage() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route path={"/"} element={<SecCon data={data} />}></Route>
          <Route path={"products"} element={<>상품리스트</>}></Route>
          <Route
            path={"contacts"}
            element={
              <>
                contacts <Outlet></Outlet>
              </>
            }
          >
            <Route path={"ceo"} element={<>사장님인사말</>}></Route>
          </Route>
          <Route path={"cart"} element={<>장바구니</>}></Route>
          <Route path={"mypage"} element={<>마이페이지</>}></Route>
        </Route>
        <Route path={"*"} element={<>404</>}></Route>
      </Routes>
    </>
  );
}

export default Mainpage;

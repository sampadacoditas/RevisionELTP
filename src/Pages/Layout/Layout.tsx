import React from "react";
import { Link, Router } from "react-router-dom";
import { array } from "../../array/array";
import { SideBar } from "../../components/SideBar/SideBar";
import { Routers } from "../../Routers/Routers";
import styles from "./Layout.module.scss";
export const Layout = () => {
  return (
    <>
      <div className={styles.link}>
        <Link to={"contact"}  >Contact</Link>
        <Link to={"about"}>About</Link>
      </div>
      {/* {array.map((item: any) => {
        return (<Routers path={item.path} element={item.component}/>)
       })} */}
      <Routers data={array} />
    </>
  );
};

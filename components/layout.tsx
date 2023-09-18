import React, { FC, ReactNode } from "react";
import Navbar from "./navbar";

interface LayoutPropTypes {
  children: ReactNode;
}

const Layout: FC<LayoutPropTypes> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="mt-[120px] main-container">{children}</div>
    </div>
  );
};

export default Layout;

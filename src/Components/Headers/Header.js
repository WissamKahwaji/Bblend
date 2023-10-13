import React from "react";
import UpHeader from "./UpHeader/UpHeader";
import DownHeader from "./DownHeader/DownHeader";

const Header = () => {
    const componentDirection = "ltr"; // Set the desired direction here

  return (
    <div
       style={{ direction: componentDirection }}
      className={`fixed z-50 w-full bg-white shadow-[0px_9px_6px_0px_#00000024] top-0`}
    >
      <UpHeader />
      <DownHeader />
    </div>
  );
};

export default Header;

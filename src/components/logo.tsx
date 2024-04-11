import React from "react";
import Icon from "./icon";

function Logo() {
  return (
    <div className="flex justify-center gap-2 items-center  p-4 rounded-lg">
      <Icon />
      <span className="text-xl font-bold">KONVERTIT</span>
    </div>
  );
}

export default Logo;

import React from "react";

function RemoveExtension(fileName: any) {
  debugger;
  const res = fileName?.name?.split(".");
  return res[1];
}

export default RemoveExtension;

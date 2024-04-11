"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

export function UploadFile({ selectedFile, setSelectedFile }: any) {
  const handleFileChange = (e: any) => {
    setSelectedFile(e.target.files?.item(0));
    console.log(selectedFile);
  };
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5  ">
      <Label htmlFor="picture">File</Label>
      <Input id="picture" type="file" onChange={(e) => handleFileChange(e)} />
      <div className="flex justify-between my-2">
        {selectedFile ? (
          <Label>
            Size: {(selectedFile?.size / 1024 / 1024).toFixed(2) + "MB"}
          </Label>
        ) : null}
        {selectedFile ? <Label>Type: {selectedFile?.type}</Label> : null}
      </div>
    </div>
  );
}

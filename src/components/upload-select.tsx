import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function UploadSelect({
  selectedConversionType,
  setSelectedConversionType,
}: any) {
  const handleSelectChange = (value: string) => {
    setSelectedConversionType(value);
    console.log(value);
  };

  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className="w-auto min-w-6">
        <SelectValue placeholder="Select Target Conversion" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="jpg">JPG</SelectItem>
          <SelectItem value="png">PNG</SelectItem>
          <SelectItem value="gif">GIF</SelectItem>
          <SelectItem value="webp">WEBP</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

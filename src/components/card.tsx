import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UploadSelect } from "./upload-select";
import { UploadFile } from "./upload-file";
import { initializeFFmpegInstance } from "@/app/utils/load";
import { fetchFile } from "@ffmpeg/util";
import { Progress } from "./ui/progress";
import { Loader } from "lucide-react";
import RemoveExtension from "@/app/utils/remove-extension";
function UploadCard() {
  const [ffmpeg, setFfmpeg] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [selectedConversionType, setSelectedConversionType] =
    useState<any>(null);
  const [progress, setProgress] = useState(0); // New state for progress

  useEffect(() => {
    const initFFmpeg = async () => {
      const ffmpegInstance = await initializeFFmpegInstance();
      setFfmpeg(ffmpegInstance);
    };

    initFFmpeg();
  }, []);
  useEffect(() => {
    let progressInterval: string | number | NodeJS.Timeout | undefined;
    if (loading) {
      progressInterval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prevProgress + 5;
        });
      }, 500);
    } else {
      clearInterval(progressInterval);
      setProgress(0);
    }
    return () => clearInterval(progressInterval); // Cleanup on unmount
  }, [loading]);
  const transcode = async () => {
    if (!selectedFile || !selectedConversionType) return;
    setLoading(true);

    await ffmpeg.writeFile(
      RemoveExtension(selectedFile),
      await fetchFile(URL.createObjectURL(selectedFile))
    );
    await ffmpeg.exec([
      "-i",
      RemoveExtension(selectedFile),
      `output.${selectedConversionType}`,
    ]);
    const data = await ffmpeg.readFile(`output.${selectedConversionType}`);
    const blob = new Blob([data.buffer], {
      type: `image/${selectedConversionType}`,
    });
    const url = URL.createObjectURL(blob);
    ffmpeg.on("progress", ({ progress, time }: any) => {
      console.log(`${progress * 100} % (transcoded time: ${time / 1000000} s)`);
    });
    // Create a hidden anchor element and click it to download the file
    const link = document.createElement("a");
    link.href = url;
    link.download = `converted.${selectedConversionType}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setLoading(false);
  };

  return (
    <Card className="flex justify-evenly mx-auto items-center align-baseline">
      {loading ? (
        <div className="flex flex-col w-full h-10 ">
          {" "}
          <h2 className="flex justify-center">
            {" "}
            <Loader />
            Conversion in Progress
          </h2>{" "}
          <Progress value={progress} />
        </div>
      ) : (
        <>
          <CardDescription>Select file to convert</CardDescription>

          <UploadFile
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
          />
          <UploadSelect
            selectedConversionType={selectedConversionType}
            setSelectedConversionType={setSelectedConversionType}
          />
          <button onClick={transcode}>Convert</button>
        </>
      )}
    </Card>
  );
}

export default UploadCard;

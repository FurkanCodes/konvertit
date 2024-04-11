"use client";
import UploadCard from "@/components/card";
import Logo from "@/components/logo";
import { ModeToggle } from "@/components/mode-toggle";
import { Heart } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-screen  max-w-[50%] mx-auto">
      <header>
        <nav className="flex justify-between items-center mx-auto mt-6">
          <div>
            <Logo />
          </div>
          <div className="flex items-center gap-[1vw] ">
            <ul>
              <Link href={"/about"}>Privacy Policy</Link>
            </ul>
            <ul>
              <Link href={"/about"}>About</Link>
            </ul>

            <ul>
              <ModeToggle />
            </ul>
          </div>
        </nav>
      </header>
      <main className="flex flex-grow justify-center">
        <section className="flex-grow p-4">
          <UploadCard />
        </section>
      </main>
      <footer className="flex justify-center items-center w-full mx-auto mb-8 gap-2">
        Made by Furkan with
        <div>
          {" "}
          <Heart />{" "}
        </div>
      </footer>
    </div>
  );
}

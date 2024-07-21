"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
export default function Header() {
  const [show, handleShow] = useState(false);

  const transitionHeader = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionHeader);
    return () => window.removeEventListener("scroll", transitionHeader);
  }, []);

  return (
    <header
      className={`fixed top-0 p-5 md:px-12 px-6 w-full h-20 z-20 transition-all ease-in duration-500 ${
        show && "bg-[#111]"
      }`}
    >
      <div className="flex justify-between">
        <Link href="/">
          <h1 className="cursor-pointer text-3xl font-bold uppercase text-[#E50914]">
            Movieflix
          </h1>
        </Link>

        <img
          className="cursor-pointer fixed right-5 size-10"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="User Avatar"
        />
      </div>
    </header>
  );
}

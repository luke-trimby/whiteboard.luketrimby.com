import { useSession } from 'next-auth/react';
import React from "react";

export default function Header() {

  const { data: session } = useSession();

  const authButton = () => {

    let className = "px-4 py-2 font-medium text-white transition duration-500 ease-in-out transform rounded-lg text-md md:mt-0 md:ml-4 ";
    let href = "/api/auth/";
    let text = "Sign ";

    if (session) {
      className += "bg-black";
      href += "signout";
      text += "out";
    } else {
      className += "bg-green-700";
      href += "signin";
      text += "in";
    }

    return (
      <a className={className} href={href}>
        {text}
      </a>
    );
  };

  return (
    <nav className="sticky flex-no-wrap flex w-full items-center bg-orange-400 py-1 z-50 opacity-80 hover:opacity-100 transition-opacity duration-150">
      <div className="flex-no-wrap relative w-1/2 flex justify-start pl-5">
        Luke's Whiteboard
      </div>
      <div className="flex-no-wrap relative w-1/2 flex justify-end pr-5">
        {authButton()}
      </div>
    </nav>
  );
}
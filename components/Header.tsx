import { useSession } from 'next-auth/react';
import React from "react";

export default function Header() {

  const { data: session } = useSession();

  const authButton = () => {

    let className = "inline-flex items-center px-4 py-2 my-2 font-medium text-white transition duration-500 ease-in-out transform rounded-lg text-md md:mt-0 md:ml-4 ";
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
    <header className="fixed top-0 w-full clearNav z-50">
      <div className="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        <div className="flex flex-row items-center justify-between p-3 md:p-1 ">
          <a href="/" className="flex text-3xl text-gray-900 font-medium mb-4 md:mb-0">Luke's Interactive Whiteboard</a>
        </div>
        <div className="flex flex-grow items-center">
          <div className="w-full ml-auto mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center text-base text-1xl justify-center justify-items-start">
            <a className="mr-5 cursor-pointer text-gray-900 hover:text-zinc-600 font-semibold tr04" href="https://luketrimby.com" target="_blank">
              Portfolio
            </a>

            {authButton()}

          </div>
        </div>
      </div>
    </header>
  );
}

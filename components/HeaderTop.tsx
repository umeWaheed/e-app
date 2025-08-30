// *********************
// Role of the component: Topbar of the header
// Name of the component: HeaderTop.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <HeaderTop />
// Input parameters: no input parameters
// Output: topbar with phone, email and login and register links
// *********************

"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { FaHeadphones } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";

const HeaderTop = () => {
  const { data: session }: any = useSession();
  const pathname = usePathname();

  const handleLogout = () => {
    setTimeout(() => signOut(), 1000);
    toast.success("Logout successful!");
  };
  return (
    <div className="h-10 text-white bg-blue-500 max-lg:px-5 max-lg:h-16 max-[573px]:px-0">
      <div className="flex justify-between h-full max-lg:flex-col max-lg:justify-center max-lg:items-center max-w-screen-2xl mx-auto px-12 max-[573px]:px-0">
        <div className="flex items-center h-full gap-x-5 max-[370px]:text-sm max-[370px]:gap-x-2">
          Send us a message on our whatsapp number +92 3298474530 to see inside
          video of any book
        </div>
        {pathname.startsWith("/admin") && (
          <ul className="flex items-center gap-x-5 h-full max-[370px]:text-sm max-[370px]:gap-x-2 font-semibold">
            {!session ? (
              <>
                <li className="flex items-center">
                  <Link
                    href="/login"
                    className="flex items-center gap-x-2 font-semibold"
                  >
                    <FaRegUser className="text-white" />
                    <span>Login</span>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link
                    href="/register"
                    className="flex items-center gap-x-2 font-semibold"
                  >
                    <FaRegUser className="text-white" />
                    <span>Register</span>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <span className="ml-10 text-base">{session.user?.email}</span>
                <li className="flex items-center">
                  <button
                    onClick={() => handleLogout()}
                    className="flex items-center gap-x-2 font-semibold"
                  >
                    <FaRegUser className="text-white" />
                    <span>Log out</span>
                  </button>
                </li>
              </>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HeaderTop;

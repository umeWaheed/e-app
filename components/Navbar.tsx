"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 shadow">
      <ul className="flex space-x-6">
        <li>
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Home
          </Link>
        </li>

        <li>
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex items-center text-gray-700 hover:text-blue-600 font-medium">
              Shop by age
              <ChevronDownIcon className="ml-1 h-4 w-4" />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 mt-2 w-48 origin-top-left bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none z-50">
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/shop/baby-to-2yrs"
                        className={`group flex w-full items-center rounded-md px-2 py-2 text-sm"
                          ${
                            active
                              ? "bg-blue-100 text-blue-800"
                              : "text-gray-700"
                          }`}
                      >
                        Baby to 2yrs
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/shop/3-to-5yrs"
                        className={`group flex w-full items-center rounded-md px-2 py-2 text-sm",
                          ${
                            active
                              ? "bg-blue-100 text-blue-800"
                              : "text-gray-700"
                          }`}
                      >
                        3 to 5yrs
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/shop/6-to-12yrs"
                        className={`group flex w-full items-center rounded-md px-2 py-2 text-sm",
                          ${
                            active
                              ? "bg-blue-100 text-blue-800"
                              : "text-gray-700"
                          }`}
                      >
                        6 to 12yrs
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>

        <li>
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="text-gray-700 hover:text-blue-600 font-medium">
              Shop by Type
              <ChevronDownIcon className="ml-1 h-4 w-4" />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute left-0 mt-2 w-48 origin-top-left bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg focus:outline-none z-50">
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/shop/board-books"
                        className={`group flex w-full items-center rounded-md px-2 py-2 text-sm"
                          ${
                            active
                              ? "bg-blue-100 text-blue-800"
                              : "text-gray-700"
                          }`}
                      >
                        Board books
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="/shop/story-books"
                        className={`group flex w-full items-center rounded-md px-2 py-2 text-sm",
                          ${
                            active
                              ? "bg-blue-100 text-blue-800"
                              : "text-gray-700"
                          }`}
                      >
                        Story Books
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

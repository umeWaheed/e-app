// *********************
// Role of the component: Showing products on the shop page with applied filter and sort
// Name of the component: Products.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <Products slug={slug} />
// Input parameters: { slug }: any
// Output: products grid
// *********************

import React from "react";
import ProductItem from "./ProductItem";
import Pagination from "./Pagination";
import router from "next/router";

const ThankYou = async () => {
  return (
    <>
      <div className="">Thankyou!!</div>
      <p>Your Order has been received and we are getting it ready</p>
      <button
        type="button"
        className="uppercase bg-blue-500 px-10 py-5 text-lg border border-black border-gray-300 font-bold text-white shadow-sm hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2"
        onClick={() => router.push("/")}
      >
        Back to store
      </button>
    </>
  );
};

export default ThankYou;

"use client";
import {
  CustomButton,
  DashboardProductTable,
  DashboardSidebar,
} from "@/components";
import Link from "next/link";
import React from "react";

const DashboardProducts = () => {
  return (
    <div className="bg-white flex justify-start max-w-screen-2xl mx-auto h-full max-xl:flex-col max-xl:h-fit max-xl:gap-y-4">
      <DashboardSidebar />
      <div className="w-full">
        <h1 className="text-3xl font-semibold text-center mb-5">All reviews</h1>
        <div className="flex justify-end mb-5">
          <Link href="/admin/reviews/new">
            <CustomButton
              buttonType="button"
              customWidth="110px"
              paddingX={10}
              paddingY={5}
              textSize="base"
              text="Add new review"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardProducts;

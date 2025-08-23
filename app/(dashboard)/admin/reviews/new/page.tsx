"use client";
import { DashboardSidebar } from "@/components";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AddNewReview = () => {
  const [review, setReview] = useState<{
    image: string;
  }>({
    image: "",
  });

  const addReview = async () => {
    if (review.image === "") {
      toast.error("Please enter values in input fields");
      return;
    }

    const requestOptions: any = {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    };
    fetch(`http://localhost:3001/api/reviews`, requestOptions)
      .then((response) => {
        if (response.status === 201) {
          return response.json();
        } else {
          throw Error(
            `There was an error while creating review, ${response.json()}`
          );
        }
      })
      .then((data) => {
        toast.success("Review added successfully");
        setReview({
          image: "",
        });
      })
      .catch((error) => {
        toast.error("There was an error while creating review");
      });
  };

  const uploadFile = async (file: any) => {
    const formData = new FormData();
    formData.append("uploadedFile", file);

    try {
      const response = await fetch("http://localhost:3001/api/main-image", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
      } else {
        console.error("File upload unsuccessfull");
      }
    } catch (error) {
      console.error("Error happened while sending request:", error);
    }
  };

  return (
    <div className="bg-white flex justify-start max-w-screen-2xl mx-auto xl:h-full max-xl:flex-col max-xl:gap-y-5">
      <DashboardSidebar />
      <div className="flex flex-col gap-y-7 xl:ml-5 max-xl:px-5 w-full">
        <h1 className="text-3xl font-semibold">Add new review</h1>

        <div>
          <input
            type="file"
            className="file-input file-input-bordered file-input-lg w-full max-w-sm"
            onChange={(e: any) => {
              uploadFile(e.target.files[0]);
              setReview({
                image: e.target.files[0].name,
              });
            }}
          />
          {review?.image && (
            <Image
              src={`/` + review?.image}
              alt={"review image"}
              className="w-auto h-auto"
              width={100}
              height={100}
            />
          )}
        </div>
        <div className="flex gap-x-2">
          <button
            onClick={addReview}
            type="button"
            className="uppercase bg-blue-500 px-10 py-5 text-lg border border-black border-gray-300 font-bold text-white shadow-sm hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2"
          >
            Add Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewReview;

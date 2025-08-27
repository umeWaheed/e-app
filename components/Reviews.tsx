// *********************
// Role of the component: IntroducingSection with the text "Introducing BookHeaven"
// Name of the component: IntroducingSection.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <IntroducingSection />
// Input parameters: no input parameters
// Output: Section with the text "Introducing BookHeaven" and button
// *********************

import Link from "next/link";
import Image from "next/image";
import React from "react";

const Reviews = async () => {
  const data = await fetch(
    `http://${process.env.SERVER_URL}:${process.env.PORT}/api/reviews`
  );
  const reviews = await data.json();

  return (
    <div className="py-20 pt-24 bg-gradient-to-l from-white to-blue-600">
      <div className="text-center flex flex-col gap-y-5 items-center">
        <h2 className="text-white text-8xl font-extrabold text-center mb-2 max-md:text-6xl max-[480px]:text-4xl">
          REVIEWS
        </h2>

        <div>
          {reviews &&
            reviews.map((review, index) => {
              return (
                <Image
                  src={`/` + review.image}
                  key={index}
                  alt={`review-${index}`}
                  className="w-auto h-auto mt-2"
                  width={100}
                  height={100}
                />
              );
            })}
          <Link
            href="/shop"
            className="block text-blue-600 bg-white font-bold px-12 py-3 text-xl hover:bg-gray-100 w-96 mt-2  max-md:text-lg max-md:w-72 max-[480px]:w-60 mx-auto"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reviews;

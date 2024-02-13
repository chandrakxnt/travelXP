import React from "react";


export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Our voyage is carried out by passionate travellers and experienced guides
            </h2>
            <p className="mt-6 text-gray-600">
            
Welcome to our travel and trips hub, where wanderlust meets adventure! We're passionate about crafting unforgettable journeys that ignite your sense of exploration and connect you with the world's wonders. Whether you crave the bustling streets of vibrant cities, the tranquil embrace of nature's beauty, or the thrill of off-the-beaten-path discoveries, we're here to turn your travel dreams into reality. With a curated selection of destinations and personalized itineraries tailored to your desires, 
            </p>
            <p className="mt-4 text-gray-600">
            let us be your compass as you embark on your next unforgettable adventure. Discover, wander, and create memories that last a lifetime with us. Welcome aboard!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

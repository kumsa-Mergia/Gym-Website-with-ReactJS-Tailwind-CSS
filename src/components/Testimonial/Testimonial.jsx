import React from "react";
import { TestimonialData } from "../../Mockdata/data";
import Slider from "react-slick";

const Testimonial = () => {
  const setting = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialslide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="p-16 py-24">
        {/* Header Section */}
        <div className="text-left mb-10 max-w-[500px" space-y-2 mr-auto>
          <h1 className="text-4xl font-bold items-center">
            What are The Costomer Saying About US
          </h1>
        </div>
        {/* Testimonials Card */}
        <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-cyan-500/10">
        
          <Slider {...setting}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div>
                  {/* Upper Section  */}
                  <div className="flex justify-start items-center gap-5">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-16 h-16"
                    />
                    <div>
                      <p className="text-xl font-bold text-black-80">
                        {data.name}
                      </p>
                      <p>{data.name}</p>
                    </div>
                  </div>
                  {/* Bottom Section  */}
                  <div className="py-6 space-y-4">
                    <p className="text-sm text-gray-500">{data.text}</p>
                    <p>⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

import Image from "next/image";
import React from "react";

type Testimonial = {
  name : string,
  text : string,
  image? : any,
  jobTitle : string
}

function TestimonialBox({name,text,jobTitle}: Testimonial) {
  const backgroundUrl = "/LandingPageImages/Testimonials/Box.svg";
  return (
    <main
      className="bg-transparent bg-center bg-no-repeat bg-contain  w-[82%]  h-full "
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      <div className="lg:w-[30%] h-[30%] w-[15%] md:w-[20%] relative mt-[-7%] ml-[5%]">
        <Image
          className="object-contain "
          fill
          src="/LandingPageImages/Testimonials/Colon.svg"
          alt="Colon"
        />
      </div>
      <h3 className="mt-[5%] lg:text-base md:text-sm  text-[#1b1b1b] text-xxss text-center font-light w-[80%] mx-auto">
       {text}
      </h3>
      <h3 className="mt-[3%] lg:text-lg md:text-base text-xxs text-[#1b1b1b] text-center font-bold w-[60%] mx-auto">
       {name}
      </h3>
      <h3 className=" lg:text-sm md:text-xs text-xxs text-[#1b1b1b] text-center font-light w-[60%] mx-auto">
       {jobTitle}
      </h3>

      <div
        className={`flex flex-row h-[8%] w-[20%] mx-auto justify-between mt-[1%]`}
      >
        {Array.from({ length: 5 }, (_, index) => (
          <div key={index} className="h-full w-[18%] relative">
            <Image
              className="object-contain"
              fill
              src="/LandingPageImages/Testimonials/Star.svg"
              alt="Filled Star"
            />
          </div>
        ))}
      </div>
    </main>
  );
}

export default TestimonialBox;

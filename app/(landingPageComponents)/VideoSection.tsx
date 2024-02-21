import Image from "next/image";
import React from "react";

type Props = {
  videoUrl: string;
};

function VideoSection({ videoUrl }: Props) {
  return (
    <section className="h-[10%] w-full ">
      {/* Video Section */}
      <div className="h-[8%] w-[70%] md:w-[60%] mx-auto flex flex-row mt-3 md:mt-6 justify-between items-center">
        <div className="h-full w-[21%] relative">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/Menu/LeftLine.svg"
            alt="Left line"
          />
        </div>
        <div className="h-full w-[10%] relative">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/Menu/LeftWing.svg"
            alt="Left line"
          />
        </div>
        <h1 className="blanch text-xl md:text-3xl lg:text-6xl text-black">
          Das sind wir
        </h1>
        <div className="h-full w-[10%] relative">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/Menu/RightWing.svg"
            alt="Left line"
          />
        </div>
        <div className="h-full w-[21%] relative">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/Menu/RightLine.svg"
            alt="Left line"
          />
        </div>
      </div>
      <div className="w-full h-[70%] flex flex-row justify-center relative">
        <div className="h-[30%] w-[20%] absolute left-[7%] top-[20%]">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/VideoSection/Bus.svg"
            alt="Left line"
          />
        </div>
        <iframe
          className="w-[60%]  mx-auto rounded-2xl shadow-lg object-cover mt-[2%] z-50"
          src="https://www.youtube.com/embed/VIDEO_ID"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <div className="h-[15%] w-[15%] absolute right-[8%] top-[50%]">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/VideoSection/QuestionMark.svg"
            alt="Left line"
          />
        </div>
      </div>
      <div className="flex flex-row justify-center gap-x-[3%] mt-[6%]">
        <button className="border-black border-[1px] rounded-3xl md:py-2 md:px-6 py-1 px-3 text-black bg-transparent  lg:text-xs md:text-xxs text-xxss font-bold">
          MEHR ÜBER UNS
        </button>
        <button className="bg-primaryGreen rounded-3xl md:py-2 md:px-6 py-1 px-3 text-white   lg:text-xs md:text-xxs text-xxss font-bold">
          Showreel Abspielen
        </button>
      </div>
    </section>
  );
}

export default VideoSection;

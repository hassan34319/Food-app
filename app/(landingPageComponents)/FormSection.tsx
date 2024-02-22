import Image from "next/image";
import Link from "next/link";
import React from "react";
import Form from "./Form";

type Props = {};

function FormSection({}: Props) {
  return (
    <section className="h-[17%] w-full mx-auto text-white">
      {/* FormSection Heading */}
      <div className="h-[8%] w-[70%] md:w-[60%] mx-auto flex flex-row mt-4 md:mt-12 lg:mt-24 justify-between items-center ">
        <div className="h-full w-[21%] relative">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/FormSection/LeftLine.svg"
            alt="Left line"
          />
        </div>
        <div className="h-full w-[10%] relative">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/FormSection/LeftWing.svg"
            alt="Left line"
          />
        </div>
        <h1 className="blanch text-xl md:text-3xl lg:text-6xl ">BUCHUNG</h1>
        <div className="h-full w-[10%] relative">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/FormSection/RightWing.svg"
            alt="Left line"
          />
        </div>
        <div className="h-full w-[21%] relative">
          <Image
            className="object-contain "
            fill
            src="/LandingPageImages/FormSection/RightLine.svg"
            alt="Left line"
          />
        </div>
      </div>
      {/* Intro Text */}

      <div className=" w-[83%] h-[85%] mx-auto text-white text-start mt-[3%] flex flex-row justify-between">
        <div className="w-[40%] h-full">
          <h1
            className="lg:text-7xl md:text-5xl text-[1.5rem] blanch w-full"
            style={{ lineHeight: "0.8" }}
          >
            IN NUR <span className="text-primaryGreen">drei SCHRITTEN </span>{" "}
            SIND WIR AUF DEM WEG ZU DIR
          </h1>
          <p className="lg:text-sm md:text-xs text-xxss  mt-2 md:mt-6 w-full text-greyText font-medium">
            Lorem ipsum dolor sit amet consectetur. Blandit quisque tristique
            ullamcorper consequat sed aliquet senectus nec. Nisl at commodo amet
            ullamcorper dignissim risus. Semper dictum urna lacus ultricies duis
            dui.{" "}
          </p>
          <div className="w-full h-[15%] relative mt-[4%]">
            <Image
              className="object-contain "
              fill
              src="/LandingPageImages/FormSection/Delivery.svg"
              alt="Delivery"
            />
          </div>
          <div className="w-full h-[12%] flex justify-end ml-[40%] mt-[2%] ">
            <div className="w-[50%] h-full relative z-50 ">
            <Image
                className="object-contain "
                fill
                src="/LandingPageImages/FormSection/Arrow.svg"
                alt="Hi"
              />
            </div>
          </div>
          <div className="w-full flex flex-row justify-between h-[13%]">
            <div className="w-[18%] h-[40%] relative">
              <Image
                className="object-contain "
                fill
                src="/LandingPageImages/FormSection/Hi.svg"
                alt="Hi"
              />
            </div>
            <div className="lg:text-sm md:text-xs text-xxss  flex flex-col gap-y-[8%]  ">
              <h3 className="text-white font-bold">Sebastian Schmidt</h3>
              <h3 className="text-greyText font-light">Zum Vogelsang</h3>
              <h3 className="text-greyText font-light">1741516 Grevenbroich</h3>
              <h3 className="text-greyText font-light">
                Email:{" "}
                <Link
                  href="mailto:info@bordsteinschwalbefoodtruck.com"
                  className="text-white underline"
                >
                  info@bordsteinschwalbefoodtruck.com{" "}
                </Link>
              </h3>
              <h3 className="text-greyText font-light">
                Tel: +49 177 8282 698
              </h3>
            </div>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
}

export default FormSection;

"use client";

import Image from "next/image";

import Container from "@/components/layout/Container";
import LoginForm from "@/components/login/LoginForm";

const page = () => {
  return (
    <div className="relative h-[90vh] sm:h-[90vh] md:h-[105vh] ">
      <Image
        alt="Mountains"
        src="/assets/bg-login-img.png"
        objectFit="cover"
        layout="fill"
      />

      <Container>
        <div className="relative z-10  flex h-screen w-full items-start justify-center  ">
          <div className="xl:w[80%] mt-3 flex h-auto w-[100%] flex-col items-center border-8 border-[#A66224] bg-[#FEF3C7] p-[10px_0px_50px_0px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] drop-shadow-lg sm:w-[100%] md:max-w-5xl lg:w-[80%] 2xl:w-[80%]">
            <div className="absolute left-0 top-0 ml-1 mt-1 h-[10px] w-[10px] bg-[#A66224] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] drop-shadow-lg "></div>
            <div className="absolute right-0 top-0 mr-1 mt-1 h-[10px] w-[10px] bg-[#A66224] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] drop-shadow-lg"></div>
            <div className="absolute bottom-0 left-0 mb-1 ml-1 h-[10px] w-[10px] bg-[#A66224] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] drop-shadow-lg"></div>
            <div className="absolute bottom-0 right-0 mb-1 mr-1 h-[10px] w-[10px] bg-[#A66224] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] drop-shadow-lg"></div>
            <h1
              className="text-center  text-6xl text-[#FEF3C7]"
              style={{
                WebkitTextStroke: "2px #5A270B",
                textShadow:
                  "4px 4px 0 #78350f, -4px -4px 0 #FEF3C7, 4px -4px 0 #FEF3C7, -4px 4px 0 #FEF3C7",
              }}
            >
              LET&apos;S GO
            </h1>
            <LoginForm />
          </div>
        </div>
      </Container>
      <div className="absolute  bottom-0 h-auto w-[100%]">
        <Container>
          <div className="flex  justify-between">
            <Image
              src="/assets/item-1.png"
              alt="item-1"
              width={50}
              height={100}
              className="w-150  left-0 ml-10"
            />
            <div className="flex">
              <Image
                src="/assets/axe-2.png"
                alt="item-1"
                width={50}
                height={100}
                className="w-150 mr-5 sm:mr-20 "
              />

              <Image
                src="/assets/bush-1.png"
                alt="item-1"
                width={80}
                height={50}
                className="w-150 mr-0 hidden sm:block md:mr-20 "
              />
            </div>
          </div>
        </Container>

        <div className="h-[40px] w-full rotate-180 bg-[#A66224] bg-[url('/assets/footerAssets/brick-gradient.png')] bg-contain bg-center bg-repeat-x md:h-[100px] lg:h-[130px] xl:h-[170px] "></div>
      </div>
    </div>
  );
};

export default page;

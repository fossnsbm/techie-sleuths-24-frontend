"use client";

import Container from "@/components/layout/Container";
import LoginForm from "@/components/login/LoginForm";
import Image from "next/image";

const page = () => {
  return (
    <div className="h-[105vh] sm:h-[115vh] md:h-[120vh] relative">
      <Image
        alt="Mountains"
        src="/assets/bg-login-img.png"
        objectFit="cover"
        layout="fill"
      />

      <Container>
        <div className="w-full h-screen  flex justify-center items-center relative z-10 ">
          <div className="border-4 border-[#A66224] w-[90%] sm:w-[80%] md:w-[50%] lg:w-[40%] xl:w[30%] 2xl:w-[30%] h-auto p-[10px_0px_50px_0px] drop-shadow-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#FEF3C7] flex flex-col items-center">
            <div className="w-[10px] h-[10px] bg-[#A66224] absolute left-0 top-0 ml-1 mt-1 drop-shadow-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] "></div>
            <div className="w-[10px] h-[10px] bg-[#A66224] absolute right-0 top-0 mr-1 mt-1 drop-shadow-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
            <div className="w-[10px] h-[10px] bg-[#A66224] absolute bottom-0 left-0 mb-1 ml-1 drop-shadow-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
            <div className="w-[10px] h-[10px] bg-[#A66224] absolute bottom-0 right-0 mb-1 mr-1 drop-shadow-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"></div>
            <h1
              className="text-5xl text-center text-[#FEF3C7]"
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
      <div className="w-[100%]  h-auto absolute bottom-0">
        <Container>
          <div className="flex  justify-between">
            <Image
              src="/assets/item-1.png"
              alt="item-1"
              width={50}
              height={100}
              className="w-150  ml-10 left-0"
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

        <div className="bg-[#A66224] w-full h-[40px] md:h-[100px] lg:h-[130px] xl:h-[170px] bg-[url('/assets/footerAssets/brick-gradient.png')] bg-contain bg-repeat-x bg-center rotate-180 "></div>
      </div>
    </div>
  );
};

export default page;

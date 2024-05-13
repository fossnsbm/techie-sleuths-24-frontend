"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Container from "./Container";
import socialMediaData from "@/data/footer/footerData";
import footerbg from "../../../public/assets/footerAssets/footer_bg.png";

const Footer = () => {
  return (
    <div className="w-full h-auto overflow-hidden">
      <div className="bg-[#A66224] w-full h-[40px] md:h-[100px] lg:h-[130px] xl:h-[170px] bg-[url('/assets/footerAssets/brick-gradient.png')] bg-contain bg-repeat-x bg-center">
        {/* <Image
          alt="Footer Background Image"
          src="/assets/footerAssets/brick_floor2.png"
          width={1920}
          height={1080}
          // objectFit="cover"
          // layout="cover"
          // objectPosition="center"
          // style={{backgroundRepeat: "repeat-x"}}
          className="bg-repeat bg-contain"
        /> */}
      </div>
      <div className="h-auto w-[100%] flex flex-row relative bg-black">
        <Image
          alt=""
          src="/assets/footerAssets/2_bushes.png"
          width={120}
          height={100}
          className="absolute top-0 left-5 md:left:10 w-[60px] md:w-[100px] xl:w-[120px]"
        />
        <Image
          alt=""
          src="/assets/footerAssets/inverted_mario.png"
          width={50}
          height={100}
          className="absolute top-0 left-0 ml-[45%] mr-[45%] w-[20px] md:w-[30px] lg:w-[40px]"
        />
        <Image
          alt=""
          src="/assets/footerAssets/plant.png"
          width={50}
          height={50}
          className="absolute top-0 right-8 md:right-12 xl:right-28 z-10 w-[20px] md:w-[30px] lg:w-[35px]"
        />
        <Image
          alt=""
          src="/assets/footerAssets/triangle_bush.png"
          width={150}
          height={50}
          className="absolute top-0 right-0 w-[35px] md:w-[70px] lg:w-[90px] xl:w-[150px] "
        />
      </div>

      <div className="w-full h-auto bg-[url('/assets/footerAssets/footer_bg.png')] bg-center bg-no-repeat bg-cover">
        <Container>
          <footer className="py-[50px]">
            <div className="h-full w-full flex flex-col md:flex-row ">
              <div className="h-full w-full md:w-[50%] flex flex-col items-center md:items-start justify-center my-[10px]">
                {/*Left Container*/}
                <Image
                  alt="Techie Sleuths Logo"
                  src="/assets/logos/techie_sleuths_logo_new.png"
                  height={85}
                  width={199}
                  className="my-[10px]"
                />
                <Image
                  alt="cloud"
                  src="/assets/footerAssets/cloud_inverted.png"
                  height={7}
                  width={100}
                  className="absolute top-10 md:top-80 left-2 md:-left-5"
                />
                <p className="my-[10px] text-[#0C4A6E] text-[20px] text-center md:text-left ">
                  Techie Sleuths is a mystery-solving adventure
                  <br />
                  game organized by the Women in FOSS. This is tailored
                  <br />
                  for newcomers to familiarize themselves with the FOC.
                </p>
                <Button
                  type="submit"
                  variant="default"
                  className="w-[200px] my-[10px]"
                >
                  Register Now
                </Button>
              </div>
              <div className="h-full w-full md:w-[50%] flex flex-col items-center md:items-end justify-center my-[10px]">
                {/*Right Container*/}
                <p className="text-[#0C4A6E] text-[30px]">Organized by</p>
                <div className="w-[150px] h-auto flex flex-row justify-evenly items-center my-[20px]">
                  <Image
                    alt="FOSS Community of NSBM"
                    src="/assets/logos/FOSS_logo.png"
                    height={69}
                    width={48}
                  />
                  <Image
                    alt="Women in FOSS logo"
                    src="/assets/logos/WIF_logo.png"
                    height={85}
                    width={70}
                  />
                </div>
                <div className="w-[150px] h-auto flex flex-row justify-around items-center my-[10px]">
                  {socialMediaData.map(({ platform, url, alt, src }) => (
                    <a key={platform} href={url}>
                      <Image alt={alt} src={src} height={20} width={20} />
                    </a>
                  ))}
                </div>
                <Image
                  alt="cloud"
                  src="/assets/footerAssets/cloud_inverted.png"
                  height={7}
                  width={100}
                  className="absolute top-10 -z-10 md:z-10 md:top-20 md:right-60 lg:right-80 lg:mr-60"
                />
              </div>
            </div>
            <div className="w-full h-auto flex flex-col md:flex-row justify-center md:justify-between items-center relative">
              <p className="my-[10px] text-[#0C4A6E] text-[20px]">
                2024 foss community of NSBM
              </p>
              <p className="my-[10px] text-[#0C4A6E] text-[20px] text-center">
                {"</>"} with 🖤 by the foss community of NSBM
              </p>
              <Image
                alt="cloud"
                src="/assets/footerAssets/cloud_inverted.png"
                height={7}
                width={100}
                className="absolute -top-40 right-0 md:-top-20 lg:-top-20 lg:right-40"
              />
            </div>
          </footer>
        </Container>
      </div>
    </div>
  );
};

export default Footer;

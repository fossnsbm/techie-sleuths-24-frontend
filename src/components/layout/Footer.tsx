"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import socialMediaData from "@/data/footer/footerData";

import footerbg from "../../../public/assets/footerAssets/footer_bg.png";
import Container from "./Container";

const Footer = () => {
  return (
    <div className="h-auto w-full overflow-hidden">
      <div className="h-[40px] w-full bg-[#A66224] bg-[url('/assets/footerAssets/brick-gradient.png')] bg-contain bg-center bg-repeat-x md:h-[100px] lg:h-[130px] xl:h-[170px]">
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
      <div className="relative flex h-auto w-[100%] flex-row bg-black">
        <Image
          alt=""
          src="/assets/footerAssets/2_bushes.png"
          width={120}
          height={100}
          className="md:left:10 absolute left-5 top-0 w-[60px] md:w-[100px] xl:w-[120px]"
        />
        <Image
          alt=""
          src="/assets/footerAssets/inverted_mario.png"
          width={50}
          height={100}
          className="absolute left-0 top-0 ml-[45%] mr-[45%] w-[20px] md:w-[30px] lg:w-[40px]"
        />
        <Image
          alt=""
          src="/assets/footerAssets/plant.png"
          width={50}
          height={50}
          className="absolute right-8 top-0 z-10 w-[20px] md:right-12 md:w-[30px] lg:w-[35px] xl:right-28"
        />
        <Image
          alt=""
          src="/assets/footerAssets/triangle_bush.png"
          width={150}
          height={50}
          className="absolute right-0 top-0 w-[35px] md:w-[70px] lg:w-[90px] xl:w-[150px] "
        />
      </div>

      <div className="h-auto w-full bg-[url('/assets/footerAssets/footer_bg.png')] bg-cover bg-center bg-no-repeat">
        <Container>
          <footer className="py-[50px]">
            <div className="flex h-full w-full flex-col md:flex-row ">
              <div className="my-[10px] flex h-full w-full flex-col items-center justify-center md:w-[50%] md:items-start">
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
                  className="absolute left-2 top-10 md:-left-5 md:top-80"
                />
                <p className="my-[10px] text-center text-[20px] text-[#0C4A6E] md:text-left ">
                  Techie Sleuths is a mystery-solving adventure
                  <br />
                  game organized by the Women in FOSS. This is tailored
                  <br />
                  for newcomers to familiarize themselves with the FOC.
                </p>
                <Link href={"/register"} target="_blank">
                  <Button
                    type="submit"
                    variant="default"
                    className="my-[10px] w-[200px]"
                  >
                    Register Now
                  </Button>
                </Link>
              </div>
              <div className="my-[10px] flex h-full w-full flex-col items-center justify-center md:w-[50%] md:items-end">
                {/*Right Container*/}
                <p className="text-[30px] text-[#0C4A6E]">Organized by</p>
                <div className="my-[20px] flex h-auto w-[150px] flex-row items-center justify-evenly">
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
                <div className="my-[10px] flex h-auto w-[150px] flex-row items-center justify-around">
                  {socialMediaData.map(({ platform, url, alt, src }) => (
                    <a target="_blank" key={platform} href={url}>
                      <Image alt={alt} src={src} height={20} width={20} />
                    </a>
                  ))}
                </div>
                <Image
                  alt="cloud"
                  src="/assets/footerAssets/cloud_inverted.png"
                  height={7}
                  width={100}
                  className="absolute top-10 -z-10 md:right-60 md:top-20 md:z-10 lg:right-80 lg:mr-60"
                />
              </div>
            </div>
            <div className="relative flex h-auto w-full flex-col items-center justify-center md:flex-row md:justify-between">
              <p className="my-[10px] text-[20px] text-[#0C4A6E]">
                2024 foss community of NSBM
              </p>
              <p className="my-[10px] text-center text-[20px] text-[#0C4A6E]">
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

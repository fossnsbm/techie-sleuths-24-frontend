"use client";

import Image from "next/image";

const Clouds = () => {
  return (
    <div className="-z-10">
      <Image
        alt="cloud"
        src="/assets/footerAssets/cloud_inverted.png"
        height={100}
        width={300}
        className="absolute left-2 top-0 w-[200px] rotate-180 md:-left-5 md:top-80 md:w-[250px]"
      />
      <Image
        alt="cloud"
        src="/assets/footerAssets/cloud_inverted.png"
        height={7}
        width={300}
        className="absolute right-20 top-60 mt-40 w-[200px] rotate-180 md:right-40 md:top-20 md:z-0 md:mt-0 md:w-[250px] lg:right-20 lg:mr-60"
      />
      <Image
        alt="cloud"
        src="/assets/footerAssets/cloud_inverted.png"
        height={100}
        width={300}
        className="absolute bottom-60 left-10 mb-[300px] w-[200px] rotate-180 sm:ml-[70px] md:bottom-80 md:left-60 md:mb-[0px] md:ml-[100px] md:w-[300px]"
      />
    </div>
  );
};

export default Clouds;

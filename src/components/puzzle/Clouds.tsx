"use client"
import Image from "next/image";

const Clouds = () => {
    return(
        <div className="-z-10">
            <Image
                alt="cloud"
                src="/assets/footerAssets/cloud_inverted.png"
                height={100}
                width={300}
                className="absolute w-[200px] md:w-[250px] left-2 top-0 md:-left-5 md:top-80 rotate-180"
            />
            <Image
                alt="cloud"
                src="/assets/footerAssets/cloud_inverted.png"
                height={7}
                width={300}
                className="absolute w-[200px] md:w-[250px] top-60 mt-40 md:mt-0 right-20 md:right-40 md:top-20 md:z-0 lg:right-20 lg:mr-60 rotate-180"
            />
            <Image
                alt="cloud"
                src="/assets/footerAssets/cloud_inverted.png"
                height={100}
                width={300}
                className="absolute w-[200px] md:w-[300px] left-10 bottom-60 mb-[300px] md:mb-[0px] md:left-60 sm:ml-[70px] md:ml-[100px] md:bottom-80 rotate-180"
            />
        </div>
    )

}

export default Clouds;
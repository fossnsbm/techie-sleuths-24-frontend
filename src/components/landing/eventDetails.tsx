'use client'
import Image from "next/image";
import CoinsRow from "../ui/coins-line";
import EventDetailsMarquee from "../ui/marquee";

export default function EventDetails() {
    return (
        <div className="w-full min-h-full bg-slate-900 relative flex flex-col items-center pt-16 pb-16">
            <EventDetailsMarquee />
            <div className="w-full h-[85vh] flex flex-row justify-center items-center pt-36 px-2">
                <div className="flex flex-col items-start gap-8 pr-12">
                    <Image
                        alt="eventDetails"
                        src="/assets/eventDetails.png"
                        width={350}
                        height={400}
                    />
                </div>
                <div className="flex flex-col gap-6 items-start pl-12">
                    <h1 className="text-8xl leading-none">
                        <span className="text-white">WHAT IS</span>
                        <span className="block -mt-6 text-amber-400">Techie Sleuths?</span>
                    </h1>
                    <p
                        className="text-lg text-white font-mono leading-loose"
                        style={{
                            textShadow: "0 0 12px rgba(255, 255, 255, 0.49)",
                            letterSpacing: "3px",
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur{" "}
                        <span className="text-amber-400">adipiscing</span>
                        <br />
                        elit. Nunc vulputate libero et velit interdum, ac
                        <br />
                        aliquet odio mattis. <span className="text-amber-400">Class</span> aptent taciti sociosqu
                        <br />
                        ad litora torquent per conubia nostr!
                    </p>
                    <p className="text-3xl text-white cursor-pointer flex items-center">
                        View past events{" "}
                        <span className="ml-2">{">"}</span>
                    </p>
                </div>
            </div>
            <div className="pt-36">
                <CoinsRow centerCount={5} sideCount={6} />
            </div>
        </div>
    );
}

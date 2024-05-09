'use client'
import { createContext } from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Countdown from '@/app/(client)/(pages)/underdev/_components/countdown';

export default function HeroSection() {
    return (
        <div className="w-full min-h-full relative">
            <div className="absolute inset-0 bg-slate-900">
                <Image
                    alt="Mountains"
                    src="/assets/bg-img.webp"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="relative z-10 hero-section flex justify-center items-center flex-col">
            <div className="logo mt-10 mb-5 sm:mt-20 sm:mb-10 md:w-500 md:h-500">
                    <Image
                        alt="Logo"
                        src="/assets/logo (with year) 1.png" 
                        width={300}
                        height={300}
                    />
                </div>
                <Countdown/>

                <h1 className="text-black font-bold mb-4 text-center text-2xl md:text-3xl" style={{ textShadow: "2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff" }}>
                    most awaited puzzle solving game.<br/> this time, <span className="text-blue-500">it’s different!</span>
                </h1>

                <div className="flex min-h-full items-center sm:flex-row sm:items-center gap-3 mb-10">
                    <Button variant="default" size="lg">COMMING SOON !!!</Button>
                        <Image
                            alt="Logo"
                            src="/assets/question-box.png" 
                            width={45}
                            height={45}
                        />
                </div>
            </div>
        </div>
    );
}

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
                <div className="logo mt-20 mb-10">
                    <Image
                        alt="Logo"
                        src="/assets/logo (with year) 1.png" 
                        width={500}
                        height={500}
                    />
                </div>
                <Countdown/>

                <h1 className="text-black text-5xl font-bold mb-4 text-center" style={{ textShadow: "2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff, -2px 2px 0 #fff" }}>most awaited puzzle solving game.<br/> this time, <span className="text-blue-500">it’s different!</span></h1>
                
                <div className="flex items-center gap-5 mb-10">
                    <Button variant="default" size="lg">COMMING SOON !!!</Button>
                    <div>
                        <Image
                            alt="Logo"
                            src="/assets/question-box.png" 
                            width={45}
                            height={45}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
}

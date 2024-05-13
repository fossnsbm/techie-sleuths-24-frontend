"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { loginTeam } from "@/api/auth/authApi";
import { useState } from "react";

export default function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        console.log(email, password)
        try {
            const res = await loginTeam(email, password);
            console.log("_res", res)
        } catch (error: any) {
            console.log("Error: ", error.response.data.error)
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <Input
                className=" transition duration-300 text-[20px] placeholder:text-[#5A270B] text-[#5A270B] mt-5 bg-[#FEF3C7] w-[80%] sm:w-[70%] h-[12%] border-4 border-[#A66224]  drop-shadow-lg hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]  shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none "
                type="email"
                placeholder="TEAM EMAIL*"
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                className="transition duration-300 text-[20px] placeholder:text-[#5A270B]  text-[#5A270B] mt-5 bg-[#FEF3C7] w-[80%]  sm:w-[70%] h-[12%] border-4 border-[#A66224]  drop-shadow-lg hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,0)] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none "
                type="email"
                placeholder="PASSWORD*"
                onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex text-[#5A270B] my-9 px-3">
                <center>
                    <h1>
                        Forget password?{" "}
                        <Link
                            href="/"
                            className="underline cursor-pointer hover:text-[#A66224] transition duration-200 active:text-[#A66224] "
                        >
                            Get a new one
                        </Link>
                    </h1>
                </center>
            </div>
            <Button
                className="mt-5"
                onClick={handleLogin}
                loading={loading}
                disabled={loading}
            >
                PLAY
            </Button>
        </>
    )
}
"use client";

import { loginTeam } from "@/api/auth/authApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "../ui/toast";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { toast } = useToast();

  const handleLogin = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let hasError = false;

    if (!email.trim()) {
      setEmailError("Email is required *");
      hasError = true;
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email format *");
      hasError = true;
    } else {
      setEmailError("");
    }

    if (!password.trim()) {
      setPasswordError("Password is required *");
      hasError = true;
    } else {
      setPasswordError("");
    }

    if (hasError) {
      return;
    }
    setLoading(true);
    try {
      setEmailError("");
      setPasswordError("");
      const res = await loginTeam(email, password);
      router.push("/play");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.response.data.error,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Input
        className=" transition duration-300 text-2xl placeholder:text-[#5A270B] text-[#5A270B] mt-5 bg-[#FEF3C7] w-[80%] sm:w-[70%] h-[12%] border-4 border-[#5A270B]  drop-shadow-lg hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]  shadow-[6px_6px_0px_0px_rgba(90,39,11,1)]  rounded-none "
        type="email"
        placeholder="TEAM EMAIL*"
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="w-[80%] sm:w-[70%] flex justify-start items-center mt-1">
        {emailError && (
          <p className="text-red-500 text-xl text-center">{emailError}</p>
        )}
      </div>
      <div className="w-[80%] sm:w-[70%] h-auto flex justify-center items-center relative">
        <div className="h-[70%] w-[25%] md:w-[15%] absolute z-10 right-0 bottom-0 flex justify-center items-center">
          <h1
            className="text-[20px] text-[#5A270B] cursor-pointer hover:text-[#A66224] transition duration-300"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "HIDE" : "SHOW"}
          </h1>
        </div>
        <Input
          className="transition duration-300 text-2xl placeholder:text-[#5A270B] pr-[29%] text-[#5A270B] mt-5 bg-[#FEF3C7] w-[100%]  sm:w-[100%] h-[12%] border-4 border-[#5A270B]  drop-shadow-lg hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,0)] shadow-[6px_6px_0px_0px_rgba(90,39,11,1)]  rounded-none "
          type={showPassword ? "text" : "password"}
          placeholder="PASSWORD*"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className=" w-[80%] sm:w-[70%] flex justify-start items-center mt-1">
        {passwordError && (
          <p className="text-red-500 text-xl text-center">{passwordError}</p>
        )}
      </div>
      <Button
        className="mt-5 "
        onClick={handleLogin}
        loading={loading}
        disabled={loading}
      >
        PLAY
      </Button>
    </>
  );
}

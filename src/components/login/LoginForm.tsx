"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { loginTeam } from "@/api/auth/authApi";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/;

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
      console.log("Password is required");
      hasError = true;
    } else if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be a mix of uppercase, lowercase, numbers, and special characters, and between 8 and 20 characters long *",
      );
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
      window.localStorage.setItem("email", email);
    }
  };

  return (
    <>
      <Input
        className=" mt-5 h-[12%] w-[80%] rounded-none border-4 border-[#5A270B] bg-[#FEF3C7] text-2xl text-[#5A270B] shadow-[6px_6px_0px_0px_rgba(90,39,11,1)] drop-shadow-lg transition  duration-300 placeholder:text-[#5A270B]  hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]  sm:w-[70%] "
        type="email"
        placeholder="TEAM EMAIL*"
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="mt-1 flex w-[80%] items-center justify-start sm:w-[70%]">
        {emailError && (
          <p className="text-center text-xl text-red-500">{emailError}</p>
        )}
      </div>
      <div className="relative flex h-auto w-[80%] items-center justify-center sm:w-[70%]">
        <div className="absolute bottom-0 right-0 z-10 flex h-[70%] w-[25%] items-center justify-center md:w-[15%]">
          <h1
            className="cursor-pointer text-[20px] text-[#5A270B] transition duration-300 hover:text-[#A66224]"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "HIDE" : "SHOW"}
          </h1>
        </div>
        <Input
          className="mt-5 h-[12%] w-[100%] rounded-none border-4 border-[#5A270B] bg-[#FEF3C7] pr-[29%] text-2xl  text-[#5A270B] shadow-[6px_6px_0px_0px_rgba(90,39,11,1)] drop-shadow-lg transition  duration-300 placeholder:text-[#5A270B] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]  sm:w-[100%] "
          type={showPassword ? "text" : "password"}
          placeholder="PASSWORD*"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className=" mt-1 flex w-[80%] items-center justify-start sm:w-[70%]">
        {passwordError && (
          <p className="text-center text-xl text-red-500">{passwordError}</p>
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

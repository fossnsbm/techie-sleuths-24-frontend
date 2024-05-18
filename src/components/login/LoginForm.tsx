"use client";

import { useState } from "react";

import Link from "next/link";

import { loginTeam } from "@/api/auth/authApi";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    let hasError = false;

    if (!email.trim()) {
      setEmailError("Email is required *");
      console.log("Email is required");
      hasError = true;
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email format *");
      console.log("Invalid email format");
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
    console.log(email, password);
    try {
      setEmailError("");
      setPasswordError("");
      const res = await loginTeam(email, password);
      console.log("_res", res);
    } catch (error: any) {
      console.log("Error: ", error.response.data.error);
    } finally {
      setLoading(false);
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

      <div className="my-9 flex px-3 text-[#5A270B]">
        <center>
          <h1 className="text-2xl">
            Forget password?{" "}
            <Link
              href="/"
              className="cursor-pointer underline transition duration-200 hover:text-[#A66224] active:text-[#A66224] "
            >
              Get a new one
            </Link>
          </h1>
        </center>
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

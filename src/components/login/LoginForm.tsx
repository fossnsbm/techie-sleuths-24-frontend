"use client";

import { loginTeam } from "@/api/auth/authApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

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
        "Password must be a mix of uppercase, lowercase, numbers, and special characters, and between 8 and 20 characters long *"
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
        className=" transition duration-300 text-[20px] placeholder:text-[#5A270B] text-[#5A270B] mt-5 bg-[#FEF3C7] w-[80%] sm:w-[70%] h-[12%] border-4 border-[#A66224]  drop-shadow-lg hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]  shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none "
        type="email"
        placeholder="TEAM EMAIL*"
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="w-[80%] sm:w-[70%] flex justify-start items-center mt-1">
        {emailError && (
          <p className="text-red-500 text-sm text-center">{emailError}</p>
        )}
      </div>
      <div className="w-[80%] sm:w-[70%] h-auto flex justify-center items-center relative">
        <div className="h-[70%] w-[25%] absolute z-10 right-0 bottom-0 flex justify-center items-center">
          <h1
            className="text-[20px] text-[#5A270B] cursor-pointer hover:text-[#A66224] transition duration-300"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "HIDE" : "SHOW"}
          </h1>
        </div>
        <Input
          className="transition duration-300 text-[20px] placeholder:text-[#5A270B] pr-[29%] text-[#5A270B] mt-5 bg-[#FEF3C7] w-[100%]  sm:w-[100%] h-[12%] border-4 border-[#A66224]  drop-shadow-lg hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,0)] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-none "
          type={showPassword ? "text" : "password"}
          placeholder="PASSWORD*"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className=" w-[80%] sm:w-[70%] flex justify-start items-center mt-1">
        {passwordError && (
          <p className="text-red-500 text-sm text-center">{passwordError}</p>
        )}
      </div>

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
  );
}

import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "font-mono font-bold flex transition duration-300 text-[20px] placeholder:text-[#5A270B] text-[#5A270B] py-3 pl-4 text-2xl bg-[#FEF3C7] w-[80%] sm:w-[70%] h-[12%] border-[6px] border-[#5A270B]  drop-shadow-lg hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]  shadow-[6px_6px_0px_0px_rgba(90,39,11,1)] rounded-none ",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

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
          "flex h-[12%] w-[80%] rounded-none border-[6px] border-[#5A270B] bg-[#FEF3C7] py-3 pl-4 font-mono text-[20px] text-xs font-bold text-[#5A270B] shadow-[6px_6px_0px_0px_rgba(90,39,11,1)] drop-shadow-lg transition duration-300  placeholder:text-[#5A270B] hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,0)]  sm:w-[70%] md:text-2xl ",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };

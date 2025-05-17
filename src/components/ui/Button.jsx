import React from "react";
import { cn } from "../../lib/utils";

const Button = ({ className, children, ...props }) => {
  return (
    <div
      className={cn("mx-3 my-2 bg-transparent cursor-pointer px-2 py-2 text-xl w-fit rounded-xl border-2 border-green flex items-center transition hover:scale-[1.02] hover:text-white hover:bg-green active:text-white active:bg-green", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Button;

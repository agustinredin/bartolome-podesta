import React from "react";
import { cn } from "../../lib/utils";

const Button = ({ className, children, ...props }) => {
  return (
    <div
      className={cn("mx-3 my-2 bg-transparent cursor-pointer px-2 py-2 text-xl w-fit rounded-xl border-2 border-blue flex items-center transition hover:scale-[1.02]  hover:bg-lblue/50", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Button;

import * as React from "react";
import { cn } from "../lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, required, type, ...props }, ref) => {
    return (
      // <div
      // className={cn(
      //   "bg-base-input border border-base-button text-base-text text-sm placeholder:text-base-label p-3 rounded focus:outline-none focus:ring-base-hover focus:ring-2",
      //   className
      // )}
      // >
        <input
          type={type}
          className={cn(
            "bg-base-input border border-base-button text-base-text text-sm placeholder:text-base-label p-3 rounded focus:outline-none focus:ring-base-hover focus:ring-2",
            className
          )}
          required={required}
          ref={ref}
          {...props}
        />
        // teste */}
      // </div>
    );
  }
);

Input.displayName = "Input";

export { Input };

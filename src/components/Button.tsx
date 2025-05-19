import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "action";
}

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: "btn btn-cta",
    action: "btn btn-cta",
  };

  return (
    <button
      className={`${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
} 
"use client";

import { ButtonHTMLAttributes } from "react";

export function Button({ className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`px-4 py-2 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 ${className}`}
      {...props}
    />
  );
}

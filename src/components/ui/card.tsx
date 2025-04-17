"use client";

import { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-xl">{children}</div>
  );
}

export function CardContent({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

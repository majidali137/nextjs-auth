"use client";

import Link from "next/link";

interface ManangeAccountProps {
  children?: React.ReactNode;
}

export const UserProfile = ({ children }: ManangeAccountProps) => {
  return (
    <Link href="/profile">
      {children}
    </Link>
   
  );
};

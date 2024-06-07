// "use client"

// import UserButton from "@/components/auth/user-button";
// // import { UserButton } from "@/components/auth/user-button";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export const Navbar = () => {
//   const pathname = usePathname();

//   return (
//       <nav className="bg-secondary flex justify-between items-center p-2 rounded-xl w-[600px] shadow-sm " >
//           <div className="flex gap-x-2">
//               <Button  asChild variant={pathname === "/server" ? "default" : "outline"}>
//                   <Link href="/server"> Server</Link>
//               </Button>
//               <Button  asChild variant={pathname === "/client" ? "default" : "outline"}>
//                   <Link href="/client"> Client</Link>
//               </Button>
//               <Button  asChild variant={pathname === "/admin" ? "default" : "outline"}>
//                   <Link href="/admin"> Admin</Link>
//               </Button>
//               <Button  asChild variant={pathname === "/settings" ? "default" : "outline"}>
//                   <Link href="/settings"> Settings</Link>
//               </Button>
//           </div>
//           <UserButton/>
//       </nav>
//   );
// };



"use client";

import UserButton from "@/components/auth/user-button";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-secondary flex justify-between items-center py-1 px-1 sm:p-2 sm:rounded-xl sm:w-[600px] w-full  shadow-sm sticky top-0 z-50">
      <div className="flex gap-x-2">
        <Button asChild variant={pathname === "/server" ? "default" : "outline"}>
          <Link href="/server">Server</Link>
        </Button>
        <Button asChild variant={pathname === "/client" ? "default" : "outline"}>
          <Link href="/client">Client</Link>
        </Button>
        <Button asChild variant={pathname === "/admin" ? "default" : "outline"}>
          <Link href="/admin">Admin</Link>
        </Button>
        <Button asChild variant={pathname === "/settings" ? "default" : "outline"}>
          <Link href="/settings">Settings</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  );
};

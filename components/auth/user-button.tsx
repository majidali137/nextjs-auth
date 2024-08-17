"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaUser } from "react-icons/fa";
// import { UploadProfilePicture } from "../UploadProfilePicture";
import { LogoutButton } from "./logout-button";
import { ExitIcon } from "@radix-ui/react-icons";
import { useUserStore } from "@/hooks/useUserStore";
import useFetchUserOnMount from "@/hooks/useUserStore";
import { PuffLoader } from "react-spinners";
import { CiSettings } from "react-icons/ci";
import { UserProfile } from "./user-profile";

const UserButton = () => {
  useFetchUserOnMount();
  const { users } = useUserStore();

  if (!users) {
    return <PuffLoader />;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="w-12 h-12">
          <AvatarImage
            src={users?.image || ""}
            className="w-full h-full rounded-full object-cover"
          />
          <AvatarFallback className="w-full h-full bg-sky-500 rounded-full flex items-center justify-center">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar>

        {/* <Avatar>
          <AvatarImage src={users?.image || ""}  />
          <AvatarFallback className="bg-sky-500">
            <FaUser className="text-white" />
          </AvatarFallback>
        </Avatar> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-50" align="end">
        {/* <DropdownMenuItem>
          <UploadProfilePicture userId={users.id} />
        </DropdownMenuItem> */}
        <UserProfile>
          <DropdownMenuItem>
            <CiSettings className="h-4 w-4 mr-2" />
            Manage Account
          </DropdownMenuItem>
        </UserProfile>
        <LogoutButton>
          <DropdownMenuItem>
            <ExitIcon className="h-4 w-4 mr-2" />
            Logout
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;

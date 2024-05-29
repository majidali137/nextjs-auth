"use client";

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useRouter } from "next/navigation";

const SettingsPage = () => {
  const user = useCurrentUser()
  const router = useRouter()

  const onClick = async () => {
   await logout()
    router.push('/auth/login')
  };

  return (
    <div className="bg-white p-10 rounded-xl">
      {/* {JSON.stringify(user)} */}
      <button onClick={onClick} type="submit">Sign out</button>
    </div>
  );
};

export default SettingsPage;

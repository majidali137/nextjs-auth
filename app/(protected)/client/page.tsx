import { UserInfo } from "@/components/user-info";
// import { useCurrentUser } from "@/hooks/use-current-user";
import { currentUser } from "@/lib/auth";

const ClientPage = async () => {
  // const user = useCurrentUser();
  const user = await currentUser()
  return (
    <div className='w-full px-2 items-center justify-center flex'>
      <UserInfo label="📱 Client Component" user={user} />
    </div>
  );
};

export default ClientPage;

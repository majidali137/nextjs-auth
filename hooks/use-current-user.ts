// import { useSession } from "next-auth/react";

// export const useCurrentUser = () => {
//     const session = useSession()

//     return session.data?.user
// }



// hooks/use-current-user.ts
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export const useCurrentUser = () => {
  const { data: session, update } = useSession();
  const [user, setUser] = useState(session?.user);

  useEffect(() => {
    const interval = setInterval(() => {
      update().then((session) => {
        setUser(session?.user);
      });
    },5000); // Fetch user data every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [update]);

  return user;
};




// hooks/use-current-user.ts
// hooks/use-current-user.ts
// import { useSession } from "next-auth/react";
// import { useState, useEffect } from "react";

// export const useCurrentUser = () => {
//   const { data: session } = useSession();
//   const [user, setUser] = useState(session?.user);

//   useEffect(() => {
//     if (session?.user) {
//       setUser(session.user);
//     }
//   }, [session]);

//   return user;
// };

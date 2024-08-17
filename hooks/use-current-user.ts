// import { useSession } from "next-auth/react";

// export const useCurrentUser = () => {
//     const session = useSession()

//     return session.data?.user
// }



import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

// This hook doesn't rely on the session provider
export const useCurrentSession = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [status, setStatus] = useState<string>("unauthenticated");
  const pathName = usePathname();

  const retrieveSession = useCallback(async () => {
    try {
      setStatus("loading");
      const sessionData = await getSession();

      if (sessionData) {
        setSession(sessionData);
        setStatus("authenticated");
        return;
      }

      setStatus("unauthenticated");
    } catch (error) {
      setStatus("unauthenticated");
      setSession(null);
    }
  }, []);

  useEffect(() => {
    retrieveSession();

    // use the pathname to force a re-render when the user navigates to a new page
  }, [retrieveSession, pathName]);

  return { session, status };
};



// polling mean Refetching every 5 seconds


// hooks/use-current-user.ts
// import { useSession } from "next-auth/react";
// import { useState, useEffect } from "react";

// export const useCurrentUser = () => {
//   const { data: session, update } = useSession();
//   const [user, setUser] = useState(session?.user);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       update().then((session) => {
//         setUser(session?.user);
//       });
//     },5000); // Fetch user data every 5 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [update]);

//   return user;
// };



import { useEffect } from 'react';
import { create } from 'zustand';
import axios from 'axios';

interface User {
  id: string;
  name?: string;
  email: string;
  image?: string;
}

interface UserStore {
  users: User | null;
  refreshUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  users: null,
  refreshUser: async () => {
    try {
      const response = await axios.get('/api/current-user', {
        withCredentials: true, // Ensure cookies are sent with the request
      });
      set({ users: response.data });
    } catch (error) {
      console.error('Failed to fetch users:', error);
      set({ users: null });
    }
  },
}));

// Ensure you call refreshUser on component mount


const useFetchUserOnMount = () => {
  const { refreshUser } = useUserStore();
  
  useEffect(() => {
    refreshUser();
  }, [refreshUser]);
};

export default useFetchUserOnMount;

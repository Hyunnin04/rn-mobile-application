import { useQuery } from '@tanstack/react-query';
import { fetchMe } from '../../../api/user';
import { UserProfile } from '../types';

export const useProfile = () => {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery<UserProfile>({
    queryKey: ['me'],
    queryFn: async () => {
      try {
        console.log('Fetching user profile...');
        const response = await fetchMe();
        console.log('Profile fetch successful:', response);
        return response as UserProfile;
      } catch (err: any) {
        console.error('Profile fetch failed:', err.message);
        throw err;
      }
    },
    retry: 1,
  });

  return {
    user,
    isLoading,
    error: error ? (error as Error).message : null,
  };
};

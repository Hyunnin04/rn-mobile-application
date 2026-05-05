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
      const response = await fetchMe();
      return response as UserProfile;
    },
  });

  return {
    user,
    isLoading,
    error: error ? (error as Error).message : null,
  };
};

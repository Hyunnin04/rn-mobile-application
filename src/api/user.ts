import client from './client';

export const fetchMe = async (): Promise<any> => {
  try {
    const response = await client.get('/users/me');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch user profile:', error);
    throw error;
  }
};

import client from './client';

export const fetchMe = async (): Promise<any> => {
  try {
    console.log('API Call: GET /users/me');
    const response = await client.get('/users/me');
    console.log('fetchMe response:', response.data);

    // Handle different response formats
    const userData = response.data?.data || response.data;
    console.log('Extracted user data:', userData);

    return userData;
  } catch (error: any) {
    console.error(
      'fetchMe error:',
      error.response?.status,
      error.response?.data || error.message,
    );
    throw error;
  }
};

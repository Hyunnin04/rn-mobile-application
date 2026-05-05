import client from './client';

export const loginWithEmail = async (
  email: string,
  password: string,
): Promise<string> => {
  try {
    const response = await client.post('/auth/login', {
      email,
      password,
    });
    return response.data.accessToken;
  } catch (error) {
    console.error('Email login failed:', error);
    throw error;
  }
};

export const loginWithPhone = async (
  countryCode: string,
  phone: string,
  password: string,
): Promise<string> => {
  try {
    const response = await client.post('/auth/login', {
      countryCode,
      phone,
      password,
    });
    return response.data.accessToken;
  } catch (error) {
    console.error('Phone login failed:', error);
    throw error;
  }
};

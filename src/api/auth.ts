import client from './client';

export const loginWithEmail = async (
  email: string,
  password: string,
): Promise<string> => {
  try {
    console.log('API Call: POST /auth/login with email:', email);
    const response = await client.post('/auth/login', {
      email,
      password,
    });
    console.log('Login response:', JSON.stringify(response.data, null, 2));

    // Handle different response formats
    const token =
      response.data.accessToken ||
      response.data.access_token ||
      response.data.token ||
      response.data.data?.accessToken ||
      response.data.data?.access_token ||
      response.data.data?.token;

    if (!token) {
      console.error('Response structure:', response.data);
      throw new Error(
        `No token found. Available keys: ${Object.keys(response.data).join(
          ', ',
        )}`,
      );
    }
    console.log('Token extracted successfully');
    return token;
  } catch (error: any) {
    console.error(
      'Email login API error:',
      error.response?.data || error.message,
    );
    throw error;
  }
};

export const loginWithPhone = async (
  countryCode: string,
  phone: string,
  password: string,
): Promise<string> => {
  try {
    console.log('API Call: POST /auth/login with phone:', phone);
    const response = await client.post('/auth/login', {
      countryCode,
      phone,
      password,
    });
    console.log('Login response:', JSON.stringify(response.data, null, 2));

    // Handle different response formats
    const token =
      response.data.accessToken ||
      response.data.access_token ||
      response.data.token ||
      response.data.data?.accessToken ||
      response.data.data?.access_token ||
      response.data.data?.token;

    if (!token) {
      console.error('Response structure:', response.data);
      throw new Error(
        `No token found. Available keys: ${Object.keys(response.data).join(
          ', ',
        )}`,
      );
    }
    console.log('Token extracted successfully');
    return token;
  } catch (error: any) {
    console.error(
      'Phone login API error:',
      error.response?.data || error.message,
    );
    throw error;
  }
};

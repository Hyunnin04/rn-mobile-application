export type RootStackParamList = {
  Login: undefined;
  Profile: undefined;
  ForgotPassword: undefined;
};

export type LoginFormState = {
  email: string;
  phone: string;
  password: string;
  showPassword: boolean;
  errorMessage: string;
  tabIndex: number;
};

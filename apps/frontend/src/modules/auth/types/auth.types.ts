export type AuthBase = {
  email: string;
  password: string;
};

export type SignUpPayload = AuthBase & {
  address: string;
  confirmPassword: string;
  invitationCode?: string;
  isDelivery: boolean;
  lastName: string;
  name: string;
  phoneNumber: string;
};

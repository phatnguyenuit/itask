export interface LoginRequestData {
  username: string;
  password: string;
}

export interface LoginResponseData {
  token: string;
  accountOwner: string;
  staff_id: string;
  apartment_id: string;
  department_id: string;
  account: {
    id: string;
    username: string;
    role_id: string;
    type: string;
  };
}

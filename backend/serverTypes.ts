export interface CreateUserRequest {
  username: string;
  email: string;
}

export interface CreateUserResponse {
  id: number;
  username: string;
  email: string;
}

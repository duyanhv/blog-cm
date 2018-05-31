export interface Token {
  id: string;
  username: string;
  email: string;
  fullName: string;
  permissions: string[];
  language: string;
  exp?: number;
  iat?: number;
}

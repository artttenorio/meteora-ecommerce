export class User {
  id: number;
  email: string;
  password: string;
  name: string | null;
  phone: string | null;
  birthDate: Date | null;
  address: string | null;
  createdAt: Date;
  updatedAt: Date;
  isAdmin: boolean;
}

export interface User {
  id?: number;
  username: string;
  name: string;
  surname: string;
  password: string;
  gender: string;
  email: string;
  phone: number;
  zipcode: number;
  voivodship: string;
  street: string;
  suite: string;
  streetOpcionally?: string;
}

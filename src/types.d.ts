export interface IUser {
  _id: string;
  username: string;
  email: string;
  password: string;
  roles: string[];
  active: boolean;
}

export interface INote {
  _id: string;
  user: string;
  title: string;
  text: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
  username: string;
  ticket: string;
}
import { IUser } from '../interfaces/user.interface';

export let users: IUser[] = [
  {
    name: 'ahmed',
    id: 1,
    email: 'a@test.com',
    phone: 4353453543,
    status: 'active',
  },
  {
    name: 'omar',
    id: 2,
    email: 'omar@test.com',
    phone: 372636722,
    status: 'active',
  },
  {
    name: 'ali',
    id: 3,
    email: 'c@test.com',
    phone: 82736,
    status: 'soft_deleted',
  },
];

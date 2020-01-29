import { Injectable } from '../../../config';

@Injectable()
export class UserService {
  async findAll() {
    return [
      {
        name: 'user1',
        age: 20,
      },
      {
        name: 'user1',
        age: 20,
      },
      {
        name: 'user1',
        age: 20,
      },
    ];
  }
}

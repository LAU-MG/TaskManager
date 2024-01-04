// src/tasks/TaskManager.ts
import {
  CreateUserRequest,
  CreateUserResponse,
} from '../../backend/serverTypes';

export default class TaskManager {
  private users: CreateUserResponse[] = [];

  createUser(request: CreateUserRequest): CreateUserResponse | null {
    const { username, email } = request;
    if (this.users.some((user) => user.username === username)) {
      console.log(
        `L'utilisateur avec le nom d'utilisateur ${username} existe déjà.`,
      );
      return null;
    }

    const newUser: CreateUserResponse = {
      id: this.users.length + 1,
      username,
      email,
    };

    this.users.push(newUser);

    console.log(`Nouvel utilisateur créé : ${username} (ID ${newUser.id})`);

    return newUser;
  }
}

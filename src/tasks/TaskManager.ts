import { Tasks } from './Tasks';
import { User } from './User';

export class TaskManager {
  private tasks: Tasks[] = [];
  private users: User[] = [];

  addUser(username: string, email: string): void {
    const newUser: User = {
      id: this.users.length + 1,
      username,
      email,
    };
    this.users.push(newUser);
    console.log(`Un utilisateur ${username} ajouté avec un Id ${newUser.id}.`);
  }

  listUsers(): void {
    console.log('Utilisateurs:');
    this.users.forEach((user) => {
      console.log(`${user.id}. ${user.username}(${user.email})`);
    });
  }

  deleteUser(username: string): void {
    const deletedUser = this.users.find((user) => user.username === username);

    if (deletedUser) {
      this.users = this.users.filter((user) => user.username !== username);
      console.log(`L'utilisateur ${username} a été supprimé.`);

      console.log('Liste des utilisateurs après la suppression :');
      this.listUsers();
    } else {
      console.log(`L'utilisateur ${username} n'existe pas.`);
    }
  }

  addTask(description: string): void {
    const newTask = new Tasks(description);
    this.tasks.push(newTask);
  }

  getTasks(): Tasks[] {
    return this.tasks;
  }
}

export class Tasks {
  constructor(
    public name: string,
    public completed: boolean = false,
  ) {}

  getDescription(): string {
    return this.name;
  }

  getStatus(): string {
    return this.completed ? 'Terminée' : 'En cours';
  }
}

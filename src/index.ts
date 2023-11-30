import { TaskManager } from './tasks/TaskManager';

const taskManager = new TaskManager();

taskManager.addUser('Gojo_Satoru', 'gojo@example.com');
taskManager.addUser('Nanami_Kento', 'nanamio@example.com');

taskManager.listUsers();

taskManager.addTask('Faire les courses');
taskManager.addTask('Répondre aux e-mails');
taskManager.deleteUser('Gojo_Satoru');

taskManager.listUsers();

console.log('Liste des utilisateurs après la suppression :');
taskManager.listUsers();

console.log('Liste des tâches :');
taskManager.getTasks().forEach((task, index) => {
  console.log(`${index + 1}. ${task.getDescription()} - ${task.getStatus()}`);
});

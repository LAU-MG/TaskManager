import { TaskManager } from "./src/tasks/TaskManager";
import { expect, test } from 'vitest'


test('Example Test', () => {
  const value = 1 + 2;
  expect(value).toBe(3);
});

test('should delete an existing user', () => {

  const taskManager = new TaskManager();


  taskManager.deleteUser('Gojo_Satoru');


});

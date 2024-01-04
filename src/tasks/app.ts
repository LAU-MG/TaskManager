// src/tasks/app.ts
import TaskManager from './TaskManager';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('userForm');
  const messagesDiv = document.getElementById('messages');

  if (!form || !messagesDiv) {
    console.error('Formulaire ou messagesDiv non trouvé sur la page.');
    return;
  }

  const taskManager = new TaskManager();

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const usernameInput = document.getElementById(
      'username',
    ) as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;

    if (!usernameInput || !emailInput) {
      console.error('Champs de saisie non trouvés sur la page.');
      return;
    }

    const response = taskManager.createUser({
      username: usernameInput.value,
      email: emailInput.value,
    });

    messagesDiv.innerHTML = response
      ? `Utilisateur créé avec succès! ID: ${response.id}`
      : "Erreur: L'utilisateur existe déjà.";
  });
});

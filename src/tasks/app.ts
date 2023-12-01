document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('userForm') as HTMLFormElement | null;
  const messagesDiv = document.getElementById(
    'messages',
  ) as HTMLDivElement | null;

  if (!form || !messagesDiv) {
    console.error('Formulaire ou messagesDiv non trouvé sur la page.');
    return;
  }

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    const usernameInput = document.getElementById(
      'username',
    ) as HTMLInputElement | null;
    const emailInput = document.getElementById(
      'email',
    ) as HTMLInputElement | null;

    if (!usernameInput || !emailInput) {
      console.error('Champs de saisie non trouvés sur la page.');
      return;
    }

    const username = usernameInput.value;
    const email = emailInput.value;

    try {
      const response = await fetch('s', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la création de l'utilisateur");
      }

      const result = await response.json();

      if (messagesDiv) {
        messagesDiv.innerHTML = `Utilisateur créé avec succès! ID: ${result.id}`;
      }
    } catch (error) {
      if (messagesDiv) {
        messagesDiv.innerHTML = `Erreur: ${
          error instanceof Error ? error.message : 'Erreur inconnue'
        }`;
      }
    }
  });
});

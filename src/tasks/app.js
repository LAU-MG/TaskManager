
document.getElementById('submitBtn').addEventListener('click', async () => {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;

  const userData = {
    username,
    email,
  };

  try {
    const response = await createUser(userData);
    console.log(response);
  } catch (error) {
    console.error('Erreur lors de la requête POST :', error);
  }
});

async function createUser(userData) {
  const response = await fetch('http://localhost:5173/createUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error(`Erreur HTTP : ${response.status}`);
  }

  return response.json();
}

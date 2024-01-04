// backend/server.ts
import * as http from 'http';
import { parse } from 'url';
import { StringDecoder } from 'string_decoder';
import TaskManager from '../src/tasks/TaskManager';

const taskManager = new TaskManager();

const server = http.createServer((req, res) => {
  const { pathname, query } = parse(req.url || '', true);
  const decoder = new StringDecoder('utf-8');
  let buffer = '';

  req.on('data', (data) => {
    buffer += decoder.write(data);
  });

  req.on('end', () => {
    buffer += decoder.end();

    const requestData = {
      path: (pathname || '').replace(/^\/+|\/+$/g, ''),
      query,
      method: req.method ? req.method.toLowerCase() : '',
      headers: req.headers,
      payload: buffer ? JSON.parse(buffer) : {},
    };

    handleRequest(requestData, (statusCode, payload) => {
      res.setHeader('Content-Type', 'application/json');
      res.writeHead(statusCode);
      res.end(JSON.stringify(payload));
    });
  });
});

function handleRequest(
  requestData: any,
  callback: (statusCode: number, payload: any) => void,
) {
  if (requestData.path === 'createUser' && requestData.method === 'post') {
    const response = taskManager.createUser(requestData.payload);

    callback(
      response ? 200 : 400,
      response ? response : { error: "L'utilisateur existe déjà." },
    );
  } else {
    callback(404, { error: 'Route non trouvée' });
  }
}

const port = 5173;
server.listen(port, () => {
  console.log(`Serveur backend en écoute sur le port ${port}`);
});

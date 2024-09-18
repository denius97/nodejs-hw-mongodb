import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';

const bootstarp = async () => {
  await initMongoConnection();
  setupServer();
};

bootstarp();

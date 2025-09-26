// Simple start script to run the server from the correct directory
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const serverPath = join(__dirname, 'server');

// Change to server directory and start the server
process.chdir(serverPath);

// Import and run the server
import('./server/index.js').catch(console.error);

// Middlewares entrypoint
import nc from 'next-connect';

// Middlewares
import db from './db';
import onError from './errHandler';

export default () => nc({ onError }).use(db);

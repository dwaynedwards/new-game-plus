const [major, minor] = process.versions.node.split('.').map(parseFloat);
if (major < 7 || (major === 7 && minor <= 5)) {
  console.error(
    'You\'re on an older version of node that doesn\'t support Async + Await! Please go to nodejs.org and download version 7.6 or greater.\n'
  );
  process.exit();
}

import dotenv from 'dotenv';
dotenv.config({ path: 'variables.env' });

import mongoose from 'mongoose';
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', err => {
  console.error(`Error connecting to database: ${err.message}`);
});

import './api/models/Game';
//import './api/data/load-game-data';

import { join } from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import apiRoutes from './api/routes';
import { notFound } from './api/utils/errorHandlers';

const server = express();

server.set('port', process.env.PORT || 8888);

server.set('views', join(__dirname, 'views'));
server.set('view engine', 'pug');

server.use(express.static(join(__dirname, 'public')));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use('/', routes);
server.use('/api', apiRoutes);
server.use(notFound);

const port = server.get('port');
server.listen(port, () => {
  console.info(`Server running on port: ${port}`);
});

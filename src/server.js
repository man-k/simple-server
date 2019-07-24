import express from 'express'

import bodyParser from 'body-parser';
import cors from 'cors'
import compression from 'compression'

import { ApolloServer } from 'apollo-server-express'

import schema from './schema'

const app = express();

app.use(cors());

app.use(compression());

app.use(bodyParser.json({ limit: '8mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

const port = 4000;

const server = new ApolloServer(schema);
server.applyMiddleware({ app });
server.installSubscriptionHandlers(app);

app.listen(port, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));


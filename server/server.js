const { ApolloServer } = require('@apollo/server')
const { expressMiddleware } = require('@apollo/server/express4');
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer')
const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const { typeDefs, resolvers } = require('./schemas')

const PORT = process.env.PORT || 3001;
const app = express();
const httpServer = http.createServer(app);
const db = require('./config/connection');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  app.use(
    cors(),
    bodyParser.json(),
    expressMiddleware(server),
  );
  db.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    })
  })
};


startApolloServer(typeDefs, resolvers)


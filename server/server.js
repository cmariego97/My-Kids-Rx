const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas')
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
})

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({app});

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server for running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
    });
  });
}

startApolloServer(typeDefs, resolvers);
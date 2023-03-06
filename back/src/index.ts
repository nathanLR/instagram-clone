import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import HelloResolver from "./resolvers/hello";

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [HelloResolver],
        validate: false,
      }),
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
    app.listen(4000, () => {
      console.log("app listening on port 4000...");
    });

    console.log("Loading users from the database...");
    const users = await AppDataSource.manager.find(User);
    console.log("Loaded users: ", users);
  })
  .catch((error) => console.log(error));

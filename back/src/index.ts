import "reflect-metadata";
import { AppDataSource } from "./data-source";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver, HelloResolver } from "./resolvers";
import { User } from "./entity";

AppDataSource.initialize()
  .then(async () => {
    AppDataSource.runMigrations();
    const app = express();
    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [HelloResolver, UserResolver],
        validate: false,
      }),
      context: () => ({ em: AppDataSource.manager }),
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
    app.listen(4000, () => {
      console.log("app listening on port 4000...");
    });
    // const nu = new User();
    // nu.setUserName("samsam");
    // nu.setEmail("samuel@gmail.com");
    // nu.setPassword("samsam13");
    // await AppDataSource.manager.save(nu);
    console.log("Loading users from the database...");
    const users = await AppDataSource.manager.find(User);
    console.log("Loaded users: ", users);
  })
  .catch((error) => console.log(error));

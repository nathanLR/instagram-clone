import "reflect-metadata";
import { AppDataSource } from "./data-source";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver, HelloResolver } from "./resolvers";
import expressSession from "express-session";
import connectPg from "connect-pg-simple";
import { _DEV_ } from "./constants";
import { MyContext } from "./types";

AppDataSource.initialize()
  .then(async () => {
    AppDataSource.runMigrations();
    const app = express();
    const pgSession = connectPg(expressSession);
    app.set("trust proxy", _DEV_);
    app.use(
      expressSession({
        store: new pgSession({
          disableTouch: true,
          conString: "postgres://postgres:sp@localhost:5432/instagram",
        }),
        secret: "azfklnhazfmazea",
        cookie: {
          maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
          httpOnly: true,
          secure: true,
          sameSite: "none",
        },
        name: "qid",
        resave: false,
        saveUninitialized: false,
      })
    );

    const apolloServer = new ApolloServer({
      schema: await buildSchema({
        resolvers: [HelloResolver, UserResolver],
        validate: false,
      }),
      context: ({ req, res }): MyContext => ({ em: AppDataSource.manager, req, res }),
    });

    const corsSettings = {
      origin: ["https://studio.apollographql.com"],
      credentials: true,
    };

    await apolloServer.start();
    apolloServer.applyMiddleware({ app, cors: corsSettings });
    app.listen(4000, () => {
      console.log("app listening on port 4000...");
    });
  })
  .catch((error) => console.log(error));
